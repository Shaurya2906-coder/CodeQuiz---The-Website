function courseHasQuestions(course) {
    if (window.practiceBank && window.practiceBank[course]) return true;
    if (window.quizBank && window.quizBank[course]) return true;
    if (quizData && quizData[course]) return true;
    return false;
}

function analyzeWeakSpots() {
    const progress = (typeof loadProgress === "function") ? loadProgress() : { results: [] };
    const results = progress.results || [];
    const map = {};

    results.forEach((r) => {
        if (r.topicBreakdown && typeof r.topicBreakdown === "object") {
            Object.keys(r.topicBreakdown).forEach((topic) => {
                const stats = r.topicBreakdown[topic];
                const key = (r.course || "Unknown") + "::" + topic;
                if (!map[key]) {
                    map[key] = { course: r.course || "Unknown", topic, correct: 0, total: 0 };
                }
                map[key].correct += Number(stats.correct) || 0;
                map[key].total += Number(stats.total) || 0;
            });
            return;
        }

        const topic = r.difficulty || "General";
        const key = (r.course || "Unknown") + "::" + topic;
        if (!map[key]) {
            map[key] = { course: r.course || "Unknown", topic, correct: 0, total: 0 };
        }
        map[key].correct += Number(r.score) || 0;
        map[key].total += Number(r.total) || 0;
    });

    const spots = Object.keys(map).map((key) => {
        const s = map[key];
        s.accuracy = s.total ? Math.round((s.correct / s.total) * 100) : 0;
        return s;
    });

    spots.sort((a, b) => a.accuracy - b.accuracy);
    return spots;
}

function getWeakSpotMap() {
    const spots = analyzeWeakSpots();
    return spots.slice(0, 6);
}

function collectCourseQuestions(course) {
    const all = [];
    const seen = new Set();

    function addQuestions(topic, arr) {
        if (!Array.isArray(arr)) return;
        arr.forEach((q) => {
            if (!q || !q.question || seen.has(q.question)) return;
            seen.add(q.question);
            all.push({ topic, ...q });
        });
    }

    if (window.practiceBank && window.practiceBank[course]) {
        Object.keys(window.practiceBank[course]).forEach((topic) => {
            addQuestions(topic, window.practiceBank[course][topic]);
        });
    }

    if (window.quizBank && window.quizBank[course]) {
        Object.keys(window.quizBank[course]).forEach((topic) => {
            addQuestions(topic, window.quizBank[course][topic]);
        });
    }

    const data = quizData && quizData[course];
    if (data) {
        if (data.practiceTopics && typeof data.practiceTopics === "object") {
            Object.keys(data.practiceTopics).forEach((topic) => {
                addQuestions(topic, data.practiceTopics[topic]);
            });
        }

        Object.keys(data).forEach((topic) => {
            if (topic === "practiceTopics") return;
            addQuestions(topic, data[topic]);
        });
    }

    return all;
}

function buildSmartQuestions(course, count) {
    if (!courseHasQuestions(course)) return [];

    const all = collectCourseQuestions(course);
    if (!all.length) return [];

    const weakSpots = analyzeWeakSpots()
        .filter((s) => s.course === course)
        .slice(0, 3);

    const weightByTopic = {};
    weakSpots.forEach((s, i) => {
        weightByTopic[s.topic] = weakSpots.length - i;
    });

    const weakQs = all.filter((q) => weightByTopic[q.topic]);
    const otherQs = all.filter((q) => !weightByTopic[q.topic]);

    const target = count || 10;
    const weakCount = weakQs.length ? Math.min(Math.ceil(target * 0.6), weakQs.length) : 0;
    const otherNeeded = target - weakCount;

    let selected = [];
    if (weakCount > 0) {
        selected = selected.concat(shuffle(weakQs).slice(0, weakCount));
    }
    if (otherNeeded > 0 && otherQs.length) {
        selected = selected.concat(shuffle(otherQs).slice(0, otherNeeded));
    }

    if (selected.length < target) {
        const used = new Set(selected.map((q) => q.question));
        shuffle(all).forEach((q) => {
            if (selected.length >= target) return;
            if (!used.has(q.question)) {
                used.add(q.question);
                selected.push(q);
            }
        });
    }

    return shuffle(selected).slice(0, target);
}

function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

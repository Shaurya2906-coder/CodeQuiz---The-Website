const PROGRESS_KEY = "codequiz_progress_v1";
const RESUME_KEY = "codequiz_resume_v1";

function loadProgress() {
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (!raw) return defaultProgress();
        const parsed = JSON.parse(raw);
        return Object.assign(defaultProgress(), parsed);
    } catch (err) {
        console.error("Failed to load progress:", err);
        return defaultProgress();
    }
}

function defaultProgress() {
    return {
        results: [],             
        lastActiveDate: null,    
        streak: 0,               
        masteredDecks: [],       
    };
}

function saveProgress(progress) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function saveResumeSession(session) {
    localStorage.setItem(RESUME_KEY, JSON.stringify({
        ...session,
        savedAt: new Date().toISOString(),
    }));
}

function loadResumeSession() {
    try {
        const raw = localStorage.getItem(RESUME_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (err) {
        if (typeof localStorage.removeItem === "function") localStorage.removeItem(RESUME_KEY);
        return null;
    }
}

function clearResumeSession() {
    if (typeof localStorage.removeItem === "function") {
        localStorage.removeItem(RESUME_KEY);
    } else {
        localStorage.setItem(RESUME_KEY, "");
    }
}

function resumeSession() {
    const session = loadResumeSession();
    if (!session) return;

    localStorage.setItem("language", session.language);
    if (session.type === "practice") {
        window.location.href = "practice.html";
    } else if (session.type === "smart") {
        window.location.href = "smart-quiz.html";
    } else {
        window.location.href = "quiz.html";
    }
}

function toISODate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

function addDays(isoDate, days) {
    const date = new Date(isoDate + "T00:00:00");
    date.setDate(date.getDate() + days);
    return toISODate(date);
}

function daysBetween(aISO, bISO) {
    const a = new Date(aISO + "T00:00:00").getTime();
    const b = new Date(bISO + "T00:00:00").getTime();
    return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

function saveQuizResult(course, difficulty, score, total, topicBreakdown) {
    const progress = loadProgress();
    const today = toISODate(new Date());
    const now = new Date().toISOString();

    const entry = {
        course: course || "Unknown",
        difficulty: difficulty || "General",
        score: Number(score) || 0,
        total: Number(total) || 0,
        dateISO: today,
        timestamp: now,
    };

    if (topicBreakdown && typeof topicBreakdown === "object") {
        entry.topicBreakdown = topicBreakdown;
    }

    progress.results.push(entry);

    if (progress.results.length > 50) {
        progress.results = progress.results.slice(-50);
    }

    if (progress.lastActiveDate === today) {
    } else if (!progress.lastActiveDate) {
        progress.streak = 1;
    } else if (daysBetween(progress.lastActiveDate, today) === 1) {
        progress.streak += 1;
    } else if (daysBetween(progress.lastActiveDate, today) > 1) {
        progress.streak = 1; // streak broken
    }
    progress.lastActiveDate = today;

    saveProgress(progress);
    return progress;
}

function recordFlashcardMastery(course, topic) {
    const progress = loadProgress();
    const today = toISODate(new Date());

    const already = progress.masteredDecks.some(
        (d) => d.course === course && d.topic === topic
    );
    if (!already) {
        progress.masteredDecks.push({ course, topic, dateISO: today });
    }

    if (progress.lastActiveDate === today) {
    } else if (!progress.lastActiveDate) {
        progress.streak = 1;
    } else if (daysBetween(progress.lastActiveDate, today) === 1) {
        progress.streak += 1;
    } else if (daysBetween(progress.lastActiveDate, today) > 1) {
        progress.streak = 1;
    }
    progress.lastActiveDate = today;

    saveProgress(progress);
    return progress;
}

function getMasteredDecks() {
    return loadProgress().masteredDecks;
}

function getProgressStats() {
    const progress = loadProgress();
    const results = progress.results;

    const totalAttempts = results.length;
    const correct = results.reduce((sum, r) => sum + r.score, 0);
    const attempted = results.reduce((sum, r) => sum + r.total, 0);
    const avgPercent = attempted ? Math.round((correct / attempted) * 100) : 0;

    let best = null;
    results.forEach((r) => {
        const pct = r.total ? (r.score / r.total) * 100 : 0;
        if (!best || pct > best.pct) {
            best = { course: r.course, difficulty: r.difficulty, pct: Math.round(pct) };
        }
    });

    const courseStats = {};
    results.forEach((r) => {
        if (!courseStats[r.course]) courseStats[r.course] = { correct: 0, total: 0 };
        courseStats[r.course].correct += r.score;
        courseStats[r.course].total += r.total;
    });
    const mastery = {};
    Object.keys(courseStats).forEach((course) => {
        const s = courseStats[course];
        mastery[course] = s.total ? Math.round((s.correct / s.total) * 100) : 0;
    });

    return {
        totalAttempts,
        avgPercent,
        best,
        streak: progress.streak,
        mastery,
        recentResults: results.slice(-5).reverse(),
    };
}

function getAchievements() {
    const stats = getProgressStats();
    const badges = [];

    if (stats.recentResults.some((r) => r.score === r.total && r.total > 0)) {
        badges.push({ id: "perfect", icon: "🥇", name: "Perfect Score", desc: "Answered all questions correctly." });
    }

    if (stats.recentResults.some((r) => r.total && (r.score / r.total) * 100 >= 85)) {
        badges.push({ id: "sharpshooter", icon: "🎯", name: "Sharp Shooter", desc: "Scored 85%+ on a quiz." });
    }

    if (stats.streak >= 3) {
        badges.push({ id: "streak", icon: "🔥", name: "Streak Master", desc: "Learned 3 days in a row." });
    }

    if (stats.totalAttempts >= 10) {
        badges.push({ id: "dedicated", icon: "💪", name: "Dedicated Learner", desc: "Completed 10+ sessions." });
    }

    const courseBadgeMap = [
        { key: "Python", icon: "🐍", name: "Python Master" },
        { key: "C", icon: "⚙️", name: "C Master" },
        { key: "C++", icon: "🛠️", name: "C++ Master" },
        { key: "Java", icon: "☕", name: "Java Master" },
];
    courseBadgeMap.forEach((cb) => {
        if ((stats.mastery[cb.key] || 0) >= 80) {
            badges.push({ id: "master-" + cb.key.toLowerCase(), icon: cb.icon, name: cb.name, desc: `Mastered ${cb.key} (80%+ average).` });
        }
    });

    const masteredCount = getMasteredDecks().length;
    if (masteredCount >= 1) {
        badges.push({ id: "flashcard-master", icon: "🃏", name: "Flashcard Master", desc: "Mastered a full flashcard deck." });
    }

    return badges;
}

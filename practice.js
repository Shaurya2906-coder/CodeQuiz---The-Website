const language = localStorage.getItem("language");

window.sessionType = "practice";

const titleEl = document.getElementById("title");
const topicSelect = document.getElementById("topicSelect");
const startButton = document.getElementById("startButton");
const setupPanel = document.getElementById("setupPanel");
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const feedbackEl = document.getElementById("feedback");
const quitButton = document.getElementById("quitButton");
const quizBox = document.querySelector(".quiz-box");

let selectedTopic = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];
let sessionStarted = false;
let sessionCompleteLabel = "Practice Complete";

function saveCurrentSession() {
    if (!sessionStarted || typeof saveResumeSession !== "function") return;
    saveResumeSession({
        type: "practice",
        language,
        topic: selectedTopic,
        questions,
        currentQuestionIndex,
        score,
        selectedAnswer,
        userAnswers,
    });
}

function restorePracticeSession(session) {
    if (!session || session.type !== "practice" || session.language !== language) return false;
    if (!Array.isArray(session.questions) || !session.questions.length) return false;

    sessionStarted = true;
    selectedTopic = session.topic;
    questions = session.questions;
    currentQuestionIndex = Math.min(Number(session.currentQuestionIndex) || 0, questions.length - 1);
    score = Number(session.score) || 0;
    selectedAnswer = session.selectedAnswer || null;
    userAnswers = Array.isArray(session.userAnswers) ? session.userAnswers : [];
    if (selectedAnswer && !userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = selectedAnswer;
    }
    titleEl.textContent = `${language} Practice — ${selectedTopic}`;
    setupPanel.classList.add("hidden");
    setHidden(questionNumberEl, false);
    setHidden(questionTextEl, false);
    setHidden(optionsContainer, false);
    setHidden(nextButton, false);
    setHidden(quitButton, false);
    setHidden(feedbackEl, true);
    loadQuestion();
    selectedAnswer = session.selectedAnswer || null;
    return true;
}

const practiceTopicMap = getPracticeTopics();

function getPracticeTopics() {
    if (typeof window.practiceBank !== "undefined" && window.practiceBank[language]) {
        return window.practiceBank[language];
    }
    if (language && quizData[language] && quizData[language].practiceTopics) {
        const pt = quizData[language].practiceTopics;
        const map = {};

        Object.keys(pt).forEach((key) => {
            const entry = pt[key];

            if (Array.isArray(entry)) {
                map[key] = entry;
            } else if (entry && typeof entry === "object") {
                Object.keys(entry).forEach((topic) => {
                    map[topic] = entry[topic];
                });
            }
        });

        return map;
    }
    return null;
}

if (!language || !quizData[language]) {
    window.location.href = "dashboard.html";
} else {
    titleEl.textContent = `${language} Practice`;
    populateTopicOptions();
    restorePracticeSession(loadResumeSession());
}

function populateTopicOptions() {
    if (practiceTopicMap) {
        const topics = Object.keys(practiceTopicMap);
        topicSelect.innerHTML = '<option value="">Select topic</option>' + topics.map((topic) => `<option value="${topic}">${topic}</option>`).join("");
    } else {
        const topics = Object.keys(quizData[language]);
        topicSelect.innerHTML = '<option value="">Select topic</option>' + topics.map((topic) => `<option value="${topic}">${topic}</option>`).join("");
    }
}

function startPractice() {
    const selectedPracticeTopic = topicSelect.value;

    if (!selectedPracticeTopic) {
        alert("Please select a topic before starting practice.");
        return;
    }

    let questionsForTopic;
    if (practiceTopicMap) {
        questionsForTopic = practiceTopicMap[selectedPracticeTopic];
    } else {
        questionsForTopic = quizData[language][selectedPracticeTopic];
    }

    if (!questionsForTopic) {
        alert("Selected topic is not available for this course.");
        return;
    }

    sessionStarted = true;
    selectedTopic = selectedPracticeTopic;
    questions = shuffle(questionsForTopic);
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];
    saveCurrentSession();

    titleEl.textContent = `${language} Practice — ${selectedPracticeTopic}`;
    setupPanel.classList.add("hidden");
    setHidden(questionNumberEl, false);
    setHidden(questionTextEl, false);
    setHidden(optionsContainer, false);
    setHidden(nextButton, false);
    setHidden(quitButton, false);
    setHidden(feedbackEl, true);

    loadQuestion();
}

function quitSession() {
    if (!sessionStarted) {
        window.location.href = "dashboard.html";
        return;
    }

    const answered = userAnswers.length + (selectedAnswer ? 1 : 0);
    const msg = answered > 0
        ? `You have answered ${answered} of ${questions.length} questions. Quit practice and return to the dashboard?`
        : "You have not answered any questions yet. Quit practice?";

    if (!confirm(msg)) return;

    saveCurrentSession();

    window.location.href = "dashboard.html";
}

startButton.addEventListener("click", startPractice);
nextButton.addEventListener("click", handleNext);
if (quitButton) quitButton.addEventListener("click", quitSession);

const language = localStorage.getItem("language");

window.sessionType = "quiz";

function getSmartSessionQuestions() {
    try {
        const raw = sessionStorage.getItem("codequiz_smart_session");
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.questions) && parsed.questions.length) {
                window.smartTopicLabel = parsed.label || "Smart Quiz";
                return parsed.questions;
            }
        }
    } catch (e) {
    }

    const savedSession = (typeof loadResumeSession === "function") ? loadResumeSession() : null;
    if (savedSession && savedSession.type === "smart" && Array.isArray(savedSession.questions)) {
        window.smartTopicLabel = savedSession.topic || "Smart Quiz";
        return savedSession.questions;
    }
    return null;
}

const DOM_IDS = {
    title: "title",
    questionNumber: "question-number",
    questionText: "question-text",
    options: "options",
    nextButton: "nextButton",
    feedback: "feedback",
    progress: "smart-progress",
};

const titleEl = document.getElementById(DOM_IDS.title);
const questionNumberEl = document.getElementById(DOM_IDS.questionNumber);
const questionTextEl = document.getElementById(DOM_IDS.questionText);
const optionsContainer = document.getElementById(DOM_IDS.options);
const nextButton = document.getElementById(DOM_IDS.nextButton);
const feedbackEl = document.getElementById(DOM_IDS.feedback);
const progressEl = document.getElementById(DOM_IDS.progress);
const quizBox = document.querySelector(".quiz-box");

let selectedTopic = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];
let sessionStarted = false;
let sessionCompleteLabel = "Smart Quiz Complete";

function saveCurrentSession() {
    if (!sessionStarted || typeof saveResumeSession !== "function") return;
    saveResumeSession({
        type: "smart",
        language,
        topic: selectedTopic,
        questions,
        currentQuestionIndex,
        score,
        selectedAnswer,
        userAnswers,
    });
}

function restoreSmartSession(session) {
    if (!session || session.type !== "smart" || session.language !== language) return false;
    if (!Array.isArray(session.questions) || !session.questions.length) return false;

    sessionStarted = true;
    selectedTopic = session.topic || "Smart Quiz";
    questions = session.questions;
    currentQuestionIndex = Math.min(Number(session.currentQuestionIndex) || 0, questions.length - 1);
    score = Number(session.score) || 0;
    selectedAnswer = session.selectedAnswer || null;
    userAnswers = Array.isArray(session.userAnswers) ? session.userAnswers : [];
    if (selectedAnswer && !userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = selectedAnswer;
    }
    titleEl.textContent = `${language} — Smart Quiz`;
    setHidden(questionNumberEl, false);
    setHidden(questionTextEl, false);
    setHidden(optionsContainer, false);
    setHidden(nextButton, false);
    setHidden(feedbackEl, true);
    loadQuestion();
    selectedAnswer = session.selectedAnswer || null;
    return true;
}

const smartQuestions = getSmartSessionQuestions();

if (!language || !courseHasQuestions(language)) {
    window.location.href = "dashboard.html";
} else if (!smartQuestions) {
    window.location.href = "dashboard.html";
} else {
    const savedSession = loadResumeSession();
    if (restoreSmartSession(savedSession)) {
    } else {
        sessionStarted = true;
        selectedTopic = window.smartTopicLabel || "Smart Quiz";
        questions = smartQuestions;
        currentQuestionIndex = 0;
        score = 0;
        selectedAnswer = null;
        userAnswers = [];
        saveCurrentSession();
    }

    titleEl.textContent = `${language} — Smart Quiz`;
    setHidden(questionNumberEl, false);
    setHidden(questionTextEl, false);
    setHidden(optionsContainer, false);
    setHidden(nextButton, false);
    setHidden(feedbackEl, true);
    if (progressEl) {
        progressEl.textContent = "Personalized to your weak topics";
        setHidden(progressEl, false);
    }

    loadQuestion();
    if (savedSession && savedSession.type === "smart") {
        selectedAnswer = savedSession.selectedAnswer || null;
    }
}

nextButton.addEventListener("click", handleNext);

const language = localStorage.getItem("language");

window.sessionType = "quiz";

const titleEl = document.getElementById("title");
const difficultySelect = document.getElementById("difficultySelect");
const quizStartButton = document.getElementById("quizStartButton");
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
let sessionCompleteLabel = "Quiz Complete";

const QUIZ_SIZE = 100; 

function saveCurrentSession() {
    if (!sessionStarted || typeof saveResumeSession !== "function") return;
    saveResumeSession({
        type: "quiz",
        language,
        topic: selectedTopic,
        questions,
        currentQuestionIndex,
        score,
        selectedAnswer,
        userAnswers,
    });
}

function restoreQuizSession(session) {
    if (!session || session.type !== "quiz" || session.language !== language) return false;
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
    titleEl.textContent = `${language} Quiz — ${selectedTopic}`;
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

if (!language || !quizData[language]) {
    window.location.href = "dashboard.html";
} else {
    titleEl.textContent = `${language} Quiz`;
    restoreQuizSession(loadResumeSession());
}

function getQuestionsForDifficulty(level) {
    if (typeof window.quizBank !== "undefined" && window.quizBank[language] && window.quizBank[language][level]) {
        const pool = window.quizBank[language][level];
        return shuffle(pool).slice(0, QUIZ_SIZE);
    }

    const questionGroups = Object.values(quizData[language]).filter(Array.isArray);
    const flattenedQuestions = questionGroups.flat();

    if (!flattenedQuestions.length) {
        return [];
    }

    const levelSize = 100;
    const startIndex = level === "Medium" ? levelSize : level === "Hard" ? levelSize * 2 : 0;
    return shuffle(flattenedQuestions).slice(startIndex, startIndex + levelSize);
}

function startQuiz() {
    const selectedQuizDifficulty = difficultySelect.value;

    if (!selectedQuizDifficulty) {
        alert("Please select a difficulty before starting the quiz.");
        return;
    }

    questions = getQuestionsForDifficulty(selectedQuizDifficulty);

    if (!questions.length) {
        alert("Questions are not available for the selected difficulty.");
        return;
    }

    sessionStarted = true;
    selectedTopic = selectedQuizDifficulty;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];
    saveCurrentSession();

    titleEl.textContent = `${language} Quiz — ${selectedQuizDifficulty}`;
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
        ? `You have answered ${answered} of ${questions.length} questions. Quit quiz and return to the dashboard?`
        : "You have not answered any questions yet. Quit quiz?";

    if (!confirm(msg)) return;

    saveCurrentSession();

    window.location.href = "dashboard.html";
}

quizStartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", handleNext);
if (quitButton) quitButton.addEventListener("click", quitSession);

const language = localStorage.getItem("language");

const titleEl = document.getElementById("title");
const topicSelect = document.getElementById("topicSelect");
const startButton = document.getElementById("startButton");
const setupPanel = document.getElementById("setupPanel");
const progressEl = document.getElementById("progress");
const stageEl = document.getElementById("stage");
const flashcardEl = document.getElementById("flashcard");
const cardQuestionEl = document.getElementById("card-question");
const cardAnswerEl = document.getElementById("card-answer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const flipButton = document.getElementById("flipButton");
const controlsEl = document.getElementById("controls");
const backToDashboard = document.getElementById("backToDashboard");

const masteryProgressEl = document.getElementById("masteryProgress");
const masteryFillEl = document.getElementById("masteryFill");
const masteryLabelEl = document.getElementById("masteryLabel");
const masteryActionsEl = document.getElementById("masteryActions");
const knowButton = document.getElementById("knowButton");
const againButton = document.getElementById("againButton");
const summaryScreenEl = document.getElementById("summaryScreen");
const summaryCardsEl = document.getElementById("summaryCards");
const summaryFlipsEl = document.getElementById("summaryFlips");
const summaryStudiesEl = document.getElementById("summaryStudies");
const summaryRestart = document.getElementById("summaryRestart");
const summaryDashboard = document.getElementById("summaryDashboard");

let cards = [];          
let queue = [];          
let known = [];          
let currentIndex = 0;   
let flipped = false;
let sessionStarted = false;
let flipCount = 0;
let restudyCount = 0;

const MASTERY_KEY_PREFIX = "codequiz_flashcard_mastery_";

function buildTopicMap() {
    const data = flashcardsData && flashcardsData[language] ? flashcardsData[language] : {};
    return data;
}

if (!language || !flashcardsData[language]) {
    window.location.href = "dashboard.html";
} else {
    titleEl.textContent = `${language} Flashcards`;
    populateTopicOptions();
}

function populateTopicOptions() {
    const topics = Object.keys(buildTopicMap());
    topicSelect.innerHTML = '<option value="">Select topic</option>' + topics.map((topic) => `<option value="${topic}">${topic}</option>`).join("");
}

function masteryStorageKey(topic) {
    return MASTERY_KEY_PREFIX + (language || "Unknown") + "_" + topic;
}

function loadKnownTitles(topic) {
    try {
        const raw = localStorage.getItem(masteryStorageKey(topic));
        return raw ? JSON.parse(raw) : [];
    } catch (err) {
        return [];
    }
}

function saveKnownTitles(topic, titles) {
    localStorage.setItem(masteryStorageKey(topic), JSON.stringify(titles));
}

function startFlashcards(forceAll) {
    const selectedTopic = topicSelect.value;

    if (!selectedTopic) {
        alert("Please select a topic before starting flashcards.");
        return;
    }

    const topicMap = buildTopicMap();
    const summaryCards = topicMap[selectedTopic];

    if (!summaryCards || !summaryCards.length) {
        alert("Selected topic is not available for this course.");
        return;
    }

    cards = summaryCards.map((card) => ({
        question: card.title,
        answer: card.points,
    }));

    const previouslyKnown = loadKnownTitles(selectedTopic);

 queue = [];
    cards.forEach((card, idx) => {
        if (forceAll || !previouslyKnown.includes(card.question)) {
            queue.push(idx);
        }
    });

    known = [];
    currentIndex = 0;
    flipped = false;
    flipCount = 0;
    restudyCount = 0;
    sessionStarted = true;

    titleEl.textContent = `${language} Flashcards — ${selectedTopic}`;
    setupPanel.classList.add("hidden");
    stageEl.classList.remove("hidden");
    controlsEl.classList.remove("hidden");
    progressEl.classList.remove("hidden");
    masteryProgressEl.classList.remove("hidden");
    summaryScreenEl.classList.add("hidden");

    updateMasteryBar();
    renderCard();
}

function renderCard() {
    if (!sessionStarted) return;
    if (queue.length === 0) {
        showSummary();
        return;
    }

    const card = cards[queue[currentIndex]];
    cardQuestionEl.textContent = card.question;

    cardAnswerEl.innerHTML = "";
    card.answer.forEach((point) => {
        const li = document.createElement("li");
        li.textContent = point;
        cardAnswerEl.appendChild(li);
    });

    progressEl.textContent = `Card ${currentIndex + 1} of ${queue.length}`;

    flipped = false;
    flashcardEl.classList.remove("flipped");
    masteryActionsEl.classList.add("hidden");

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = true; // must flip & assess before moving on
}

function flipCard() {
    if (!sessionStarted || queue.length === 0) return;
    flipped = !flipped;
    flashcardEl.classList.toggle("flipped", flipped);

    if (flipped) {
        flipCount += 1;
        // Show self-assessment buttons once the card is flipped.
        masteryActionsEl.classList.remove("hidden");
        nextButton.disabled = true;
    }
}

function markKnown() {
    if (!sessionStarted || queue.length === 0) return;

    const cardIdx = queue[currentIndex];
    const card = cards[cardIdx];

    known.push(cardIdx);
    const previouslyKnown = loadKnownTitles(topicSelect.value);
    if (!previouslyKnown.includes(card.question)) {
        previouslyKnown.push(card.question);
        saveKnownTitles(topicSelect.value, previouslyKnown);
    }

    queue.splice(currentIndex, 1);

    if (currentIndex >= queue.length) {
        currentIndex = 0;
    }

    updateMasteryBar();
    renderCard();
}

function markAgain() {
    if (!sessionStarted || queue.length === 0) return;
    restudyCount += 1;

    const cardIdx = queue.splice(currentIndex, 1)[0];
    queue.push(cardIdx);

    if (currentIndex >= queue.length) {
        currentIndex = 0;
    }

    renderCard();
}

function updateMasteryBar() {
    if (!sessionStarted) return;
    // Progress = (session-known + previously-known) / total cards.
    const previouslyKnown = loadKnownTitles(topicSelect.value).length;
    const sessionNew = known.length;
    const mastered = Math.min(previouslyKnown + sessionNew, cards.length);
    const pct = cards.length ? Math.round((mastered / cards.length) * 100) : 0;

    masteryFillEl.style.width = pct + "%";
    masteryLabelEl.textContent = `${mastered}/${cards.length} known`;
}

function showSummary() {
    sessionStarted = false;
    stageEl.classList.add("hidden");
    controlsEl.classList.add("hidden");
    masteryActionsEl.classList.add("hidden");
    masteryProgressEl.classList.add("hidden");
    progressEl.classList.add("hidden");

    summaryCardsEl.textContent = cards.length;
    summaryFlipsEl.textContent = flipCount;
    summaryStudiesEl.textContent = restudyCount;

    summaryScreenEl.classList.remove("hidden");

    if (typeof recordFlashcardMastery === "function") {
        recordFlashcardMastery(language, topicSelect.value);
    }
}

function goPrev() {
    if (!sessionStarted || queue.length === 0) return;
    if (currentIndex > 0) {
        currentIndex -= 1;
        renderCard();
    }
}

function goNext() {
    return;
}

startButton.addEventListener("click", startFlashcards);
flipButton.addEventListener("click", flipCard);
flashcardEl.addEventListener("click", flipCard);
prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);
knowButton.addEventListener("click", markKnown);
againButton.addEventListener("click", markAgain);

backToDashboard.addEventListener("click", () => {
    window.location.href = "dashboard.html";
});

summaryRestart.addEventListener("click", () => {
    const selectedTopic = topicSelect.value;
    topicSelect.value = selectedTopic;
    summaryScreenEl.classList.add("hidden");
    startFlashcards(true);
});

summaryDashboard.addEventListener("click", () => {
    window.location.href = "dashboard.html";
});


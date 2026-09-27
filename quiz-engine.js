function setHidden(element, hidden) {
    if (hidden) {
        element.classList.add("hidden");
    } else {
        element.classList.remove("hidden");
    }
}

function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionTextEl.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    selectedAnswer = null;
    setHidden(feedbackEl, true);

    shuffle(currentQuestion.choices).forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.type = "button";
        button.addEventListener("click", () => selectAnswer(button, choice));
        optionsContainer.appendChild(button);
    });

    const savedAnswer = userAnswers[currentQuestionIndex] || null;
    if (savedAnswer) {
        const savedButton = Array.from(optionsContainer.querySelectorAll("button"))
            .find((button) => button.textContent === savedAnswer);
        if (savedButton) selectAnswer(savedButton, savedAnswer);
    }

    renderQuestionNavigator();
}

function renderQuestionNavigator() {
    const navigator = document.getElementById("questionNavigator");
    if (!navigator || !questions.length) return;

    navigator.innerHTML = questions.map((question, index) => {
        const answered = Boolean(userAnswers[index]);
        const current = index === currentQuestionIndex;
        return `
            <button type="button" class="question-nav-item ${answered ? "answered" : ""} ${current ? "current" : ""}"
                data-question-index="${index}" aria-label="Go to question ${index + 1}" aria-current="${current ? "step" : "false"}">
                ${index + 1}
            </button>
        `;
    }).join("");

    navigator.querySelectorAll(".question-nav-item").forEach((button) => {
        button.addEventListener("click", () => {
            goToQuestion(Number(button.dataset.questionIndex));
        });
    });

    setHidden(navigator, false);
}

function goToQuestion(index) {
    if (!sessionStarted || index < 0 || index >= questions.length) return;
    currentQuestionIndex = index;
    selectedAnswer = userAnswers[index] || null;
    loadQuestion();
    if (typeof saveCurrentSession === "function") saveCurrentSession();
}

function selectAnswer(button, answer) {
    const currentQuestion = questions[currentQuestionIndex];
    selectedAnswer = answer;
    userAnswers[currentQuestionIndex] = answer;

    if (typeof saveCurrentSession === "function") saveCurrentSession();

    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach((btn) => {
        btn.disabled = true;
        btn.classList.remove("selected", "correct", "wrong");
    });

    button.classList.add("selected");

    if (window.sessionType === "quiz") {
        setHidden(feedbackEl, true);
        return;
    }

    buttons.forEach((btn) => {
        if (btn.textContent === currentQuestion.correct) {
            btn.classList.add("correct");
        }

        if (btn.textContent === answer && answer !== currentQuestion.correct) {
            btn.classList.add("wrong");
        }
    });

    const isCorrect = answer === currentQuestion.correct;
    feedbackEl.innerHTML = `
        <p class="${isCorrect ? "feedback-correct" : "feedback-wrong"}">${isCorrect ? "Correct!" : "Wrong!"}</p>
        <p><strong>Correct answer:</strong> ${currentQuestion.correct}</p>
        <p>${getExplanation(currentQuestion)}</p>
    `;
    setHidden(feedbackEl, false);
}

function handleNext() {
    if (!sessionStarted || !selectedTopic) {
        alert("Please start a session first.");
        return;
    }

    if (!selectedAnswer) {
        alert("Please select an answer before moving on.");
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedAnswer;
    score = questions.reduce((total, question, index) => {
        return total + (userAnswers[index] === question.correct ? 1 : 0);
    }, 0);

    currentQuestionIndex += 1;

    if (typeof saveCurrentSession === "function") saveCurrentSession();

    if (currentQuestionIndex >= questions.length) {
        showResults();
    } else {
        loadQuestion();
    }
}

function showResults() {
    const topicBreakdown = {};
    questions.forEach((question, index) => {
        const topic = question.topic || selectedTopic || "General";
        if (!topicBreakdown[topic]) {
            topicBreakdown[topic] = { correct: 0, total: 0 };
        }
        topicBreakdown[topic].total += 1;
        if (userAnswers[index] === question.correct) {
            topicBreakdown[topic].correct += 1;
        }
    });

    if (typeof saveQuizResult === "function") {
        saveQuizResult(
            language || selectedTopic,
            selectedTopic || "General",
            score,
            questions.length,
            topicBreakdown
        );
    }

    if (typeof clearResumeSession === "function") clearResumeSession();

    quizBox.innerHTML = `
        <h1>${sessionCompleteLabel}</h1>
        <h2>You scored ${score} out of ${questions.length}</h2>
        <p>${getResultMessage()}</p>

        <div class="review-section">
            <h3>View Answers</h3>
            <div class="review-list">
                ${questions.map((question, index) => `
                    <div class="review-item">
                        <button class="review-question-btn" type="button" data-index="${index}">
                            <span>Q${index + 1}</span>
                            <span>${question.question}</span>
                        </button>
                        <div class="review-answer-panel hidden" id="review-panel-${index}">
                            <p><strong>Your answer:</strong> ${userAnswers[index] || "No answer"}</p>
                            <p><strong>Correct answer:</strong> ${question.correct}</p>
                            <p><strong>Explanation:</strong> ${getExplanation(question)}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>

        <button id="restartSession" class="next">Try Again</button>
        <button id="backToDashboard" class="next" style="background:#2563eb; margin-top:10px;">Back to Dashboard</button>
    `;

    document.querySelectorAll(".review-question-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            const panel = document.getElementById(`review-panel-${index}`);
            const isHidden = panel.classList.contains("hidden");

            document.querySelectorAll(".review-answer-panel").forEach((item) => item.classList.add("hidden"));
            document.querySelectorAll(".review-question-btn").forEach((item) => item.classList.remove("active"));

            if (isHidden) {
                panel.classList.remove("hidden");
                button.classList.add("active");
            }
        });
    });

    document.getElementById("restartSession").addEventListener("click", () => {
        window.location.reload();
    });

    document.getElementById("backToDashboard").addEventListener("click", () => {
        window.location.href = "dashboard.html";
    });
}

function getExplanation(question) {
    const prompt = question.question.toLowerCase();
    const correctAnswer = question.correct;
    const topic = language || "this topic";

    if (prompt.includes("comment")) {
        return `Comments in ${topic} are written with ${correctAnswer}, which is the standard way to annotate code without affecting execution.`;
    }

    if (prompt.includes("keyword") || prompt.includes("operator") || prompt.includes("symbol")) {
        return `The correct choice is ${correctAnswer} because it is the standard syntax used for this operation in ${topic}.`;
    }

    if (prompt.includes("function") || prompt.includes("method")) {
        return `The correct answer is ${correctAnswer} because it is the standard built-in or language-defined way to perform this task in ${topic}.`;
    }

    if (prompt.includes("loop") || prompt.includes("repeat")) {
        return `This is handled with ${correctAnswer}, which is the typical control structure for repeating code in ${topic}.`;
    }

    if (prompt.includes("class") || prompt.includes("inherit") || prompt.includes("object")) {
        return `The correct answer is ${correctAnswer} because it matches the standard object-oriented structure used in ${topic}.`;
    }

    if (prompt.includes("file") || prompt.includes("open")) {
        return `The correct answer is ${correctAnswer} because it represents the standard file operation or mode for this task in ${topic}.`;
    }

    return `The correct answer is ${correctAnswer} because it matches the standard rule or syntax for this concept in ${topic}.`;
}

function getResultMessage() {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect score! You know this topic well.";
    if (percentage >= 80) return "Great work! You have a strong understanding.";
    if (percentage >= 50) return "Good attempt. Keep practicing to improve.";
    return "Keep learning and try again. Practice makes perfect.";
}

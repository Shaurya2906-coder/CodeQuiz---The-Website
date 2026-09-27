function startPractice(language) {
    localStorage.setItem("language", language);
    window.location.href = "practice.html";
}

function startQuiz(language) {
    localStorage.setItem("language", language);
    window.location.href = "quiz.html";
}

function startFlashcards(language) {
    localStorage.setItem("language", language);
    window.location.href = "flashcards.html";
}

function logout() {
    sessionStorage.removeItem("codequiz_logged_in");
    sessionStorage.removeItem("codequiz_offline_mode");
    window.location.href = "index.html";
}

function renderProgress() {
    const stats = getProgressStats();
    const achievements = getAchievements();
    const resume = loadResumeSession();
    const resumeSection = document.getElementById("resumeSection");
    const resumeDetails = document.getElementById("resumeDetails");
    if (resumeSection && resumeDetails) {
        if (resume && Array.isArray(resume.questions) && resume.questions.length) {
            const answered = Array.isArray(resume.userAnswers) ? resume.userAnswers.length : 0;
            const current = Math.min(Number(resume.currentQuestionIndex) || 0, resume.questions.length - 1);
            const label = resume.type === "practice" ? "Practice" : resume.type === "smart" ? "Smart Quiz" : "Quiz";
            resumeDetails.textContent = `${resume.language} ${label} - Question ${current + 1} of ${resume.questions.length} (${answered} answered)`;
            resumeSection.classList.remove("hidden");
        } else {
            resumeSection.classList.add("hidden");
        }
    }

    // Stats
    document.getElementById("statAvg").textContent = stats.avgPercent + "%";
    document.getElementById("statAttempts").textContent = stats.totalAttempts;
    document.getElementById("statStreak").textContent = stats.streak;

    // Achievements
    const badgesGrid = document.getElementById("badgesGrid");
    if (achievements.length === 0) {
        badgesGrid.innerHTML = '<p class="empty-state">Keep learning to unlock achievement badges! 🚀</p>';
    } else {
        badgesGrid.innerHTML = achievements.map((b) => `
            <div class="badge-card" title="${b.desc}">
                <span class="badge-icon">${b.icon}</span>
                <span class="badge-name">${b.name}</span>
            </div>
        `).join("");
    }

    const recentList = document.getElementById("recentList");
    if (stats.recentResults.length === 0) {
        recentList.innerHTML = '<p class="empty-state">No sessions yet. Take a quiz to start tracking your progress!</p>';
        return;
    }

    recentList.innerHTML = stats.recentResults.map((r) => {
        const pct = r.total ? Math.round((r.score / r.total) * 100) : 0;
        const pass = pct >= 50;
        const date = new Date(r.dateISO + "T00:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric" });
        return `
            <div class="recent-item">
                <div class="recent-left">
                    <span class="recent-course">${r.course}</span>
                    <span class="recent-difficulty">${r.difficulty}</span>
                </div>
                <div class="recent-score">
                    <strong>${r.score}/${r.total}</strong>
                    <span class="recent-pill ${pass ? "pill-pass" : "pill-fail"}">${pass ? "Pass" : "Fail"}</span>
                </div>
                <span class="recent-date">${date}</span>
            </div>
        `;
    }).join("");
}



renderProgress();


function renderWeakSpotMap() {
    const grid = document.getElementById("weakmapGrid");
    if (!grid) return;

    const spots = getWeakSpotMap();

    if (!spots.length) {
        grid.innerHTML = '<p class="empty-state">No quiz history yet. Take a few quizzes and your weak spots will appear here.</p>';
        return;
    }

    grid.innerHTML = spots.map((spot) => {
        const color = spot.accuracy < 50 ? "#f87171" : spot.accuracy < 80 ? "#fbbf24" : "#34d399";
        return `
            <div class="weakmap-item">
                <div class="weakmap-top">
                    <span class="weakmap-course">${spot.course}</span>
                    <span class="weakmap-topic">${spot.topic}</span>
                    <span class="weakmap-pct">${spot.accuracy}%</span>
                </div>
                <div class="weakmap-bar">
                    <div class="weakmap-fill" style="width:${spot.accuracy}%; background:${color};"></div>
                </div>
                <div class="weakmap-sub">${spot.correct}/${spot.total} correct</div>
            </div>
        `;
    }).join("");
}

function generateSmartQuiz() {
    const select = document.getElementById("smartCourseSelect");
    const course = select ? select.value : "";

    if (!course) {
        alert("Please select a course for the Smart Quiz.");
        return;
    }

    if (typeof courseHasQuestions === "function" && !courseHasQuestions(course)) {
        alert("Questions are not available for this course yet.");
        return;
    }

    const questions = buildSmartQuestions(course, 10);
    if (!questions.length) {
        alert("No questions available for this course yet.");
        return;
    }

    sessionStorage.setItem("codequiz_smart_session", JSON.stringify({
        course,
        label: "Smart Quiz",
        questions,
    }));

    localStorage.setItem("language", course);
    window.location.href = "smart-quiz.html";
}

const smartGenerateBtn = document.getElementById("smartGenerateBtn");
if (smartGenerateBtn) {
    smartGenerateBtn.addEventListener("click", generateSmartQuiz);
}
renderWeakSpotMap();

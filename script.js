const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        showPassword.textContent = "";
    } else {
        password.type = "password";
        showPassword.textContent = "👁";
    }
});

showFileProtocolNotice(message);

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const userEmail = email.value.trim().toLowerCase();
    const userPassword = password.value.trim();

    if (userEmail === "" || userPassword === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields!";
        return;
    }

    if (userPassword.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters!";
        return;
    }

    const submitBtn = loginForm.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.disabled = true;
    message.textContent = "Checking credentials...";
    message.style.color = "#888";

    try {
        const data = await loginWithFallback(userEmail, userPassword);

        if (data.success) {
            sessionStorage.setItem("codequiz_logged_in", "1");
            if (data.offline) {
                sessionStorage.setItem("codequiz_offline_mode", "1");
            } else {
                sessionStorage.removeItem("codequiz_offline_mode");
            }

            message.style.color = "green";
            message.textContent = data.offline
                ? "Login successful (offline mode). Redirecting..."
                : "Login Successful! Redirecting...";

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 900);
            return;
        }

        message.style.color = "red";
        message.textContent = data.message || "Incorrect email or password. Please try again.";
    } catch (err) {
        console.error("Login failed:", err);
        message.style.color = "red";
        message.textContent = "Login failed. Please try again.";
    }

    if (submitBtn) submitBtn.disabled = false;
});

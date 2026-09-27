function getApiBase() {
    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
        return window.location.origin;
    }
    return "http://localhost:3000";
}

const OFFLINE_ACCOUNTS = {
    "shaurya1521.be24@chitkarauniversity.edu.in": "Sha.@123",
    "user@example.com": "password123",
    "admin@example.com": "admin1234",
};

function tryOfflineLogin(email, password) {
    const expected = OFFLINE_ACCOUNTS[email];
    if (expected && expected === password) {
        return { success: true, offline: true, message: "Login successful." };
    }
    return { success: false, message: "Incorrect email or password." };
}

async function loginWithFallback(email, password) {
    const apiBase = getApiBase();

    try {
        const response = await fetch(`${apiBase}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            return { ...data, offline: false };
        }

        return data;
    } catch (err) {
        console.warn("Server login unavailable, trying offline auth:", err.message);
        return tryOfflineLogin(email, password);
    }
}

function isFileProtocol() {
    return window.location.protocol === "file:";
}

function showFileProtocolNotice(container) {
    if (!isFileProtocol() || !container) {
        return;
    }

    container.style.color = "#fbbf24";
    container.textContent =
        "Tip: Double-click start.bat (or run npm start) and open http://localhost:3000 for the full server experience. Offline login still works below.";
}

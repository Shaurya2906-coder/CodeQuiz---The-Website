const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const USERS_FILE = path.join(__dirname, 'users.json');

const DEFAULT_USERS = [
    { email: 'shaurya1521.be24@chitkarauniversity.edu.in', password: 'Sha.@123' },
];

function ensureUserStore() {
    if (!fs.existsSync(USERS_FILE)) {
        const users = DEFAULT_USERS.map((u) => ({
            email: u.email,
            passwordHash: bcrypt.hashSync(u.password, 10),
        }));
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
    }
}

function loadUsers() {
    ensureUserStore();
    try {
        return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    } catch (err) {
        console.error('Failed to read users file:', err);
        return [];
    }
}

app.get('/api/health', (req, res) => {
    res.json({ ok: true, service: 'codequiz' });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const users = loadUsers();
    const user = users.find((u) => u.email.toLowerCase() === normalizedEmail);

    if (!user) {
        // Deliberately same message for unknown email vs wrong password
        return res.status(401).json({ success: false, message: 'Incorrect email or password.' });
    }

    const passwordMatches = bcrypt.compareSync(String(password), user.passwordHash);
    if (!passwordMatches) {
        return res.status(401).json({ success: false, message: 'Incorrect email or password.' });
    }

    return res.json({ success: true, message: 'Login successful.' });
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    ensureUserStore();
    console.log(`CodeQuiz server running at http://localhost:${PORT}`);
    console.log('Open that URL in your browser, or double-click start.bat next time.');
});

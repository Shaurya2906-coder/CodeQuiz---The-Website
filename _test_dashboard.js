const fs = require('fs');
const vm = require('vm');

const elements = {};
function makeEl(id) {
    return {
        addEventListener: (evt, fn) => { elements[id + ':' + evt] = fn; },
        textContent: '',
        innerHTML: '',
        value: '',
        style: {},
        classList: { add(){}, remove(){}, toggle(){} },
    };
}
const listeners = {};
const document = {
    getElementById: (id) => { if (!elements[id]) elements[id] = makeEl(id); return elements[id]; },
    querySelector: () => makeEl('q'),
    querySelectorAll: () => [],
    createElement: () => makeEl('new'),
};
const window = { location: { href: '' } };
const localStorage = { _s: {}, getItem(k){ return this._s[k] !== undefined ? this._s[k] : null; }, setItem(k,v){ this._s[k]=String(v); } };
const sessionStorage = { _s: {}, getItem(k){ return this._s[k] !== undefined ? this._s[k] : null; }, setItem(k,v){ this._s[k]=String(v); } };
const alert = (m) => { console.log('ALERT:', m); };

const ctx = { document, window, localStorage, sessionStorage, alert, console };
vm.createContext(ctx);

vm.runInContext(fs.readFileSync('c:/CodeQuiz/quiz-data.js', 'utf8'), ctx);
vm.runInContext(fs.readFileSync('c:/CodeQuiz/progress.js', 'utf8'), ctx);
vm.runInContext(fs.readFileSync('c:/CodeQuiz/smart-quiz.js', 'utf8'), ctx);

try {
    vm.runInContext(fs.readFileSync('c:/CodeQuiz/dashboard.js', 'utf8'), ctx);
    console.log('dashboard.js executed WITHOUT throwing');
} catch (e) {
    console.log('dashboard.js THREW:', e.message);
}

try {
    const handler = elements['smartGenerateBtn:click'];
    if (!handler) {
        console.log('smartGenerateBtn click handler NOT attached');
    } else {
        elements['smartCourseSelect'].value = 'Python';
        handler();
        console.log('generateSmartQuiz executed. sessionStorage.codequiz_smart_session =', sessionStorage._s['codequiz_smart_session'] ? 'SET' : 'NOT SET');
        console.log('window.location.href =', window.location.href);
    }
} catch (e) {
    console.log('generateSmartQuiz THREW:', e.message);
}

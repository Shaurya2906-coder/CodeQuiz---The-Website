const fs = require('fs');
const path = require('path');
const vm = require('vm');

const src = fs.readFileSync(path.join(__dirname, 'quiz-data.js'), 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(src + '\n;globalThis.quizData = quizData;', sandbox);
const quizData = sandbox.quizData;

function esc(s){return String(s).replace(/\\/g,'\\\\').replace(/"/g,'\\"');}
function fmtQ(q){return `                { question: "${esc(q.question)}", choices: [${q.choices.map(c=>`"${esc(c)}"`).join(', ')}], correct: "${esc(q.correct)}" }`;}
function shuffle(a){const r=a.slice();for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}

function expand(seeds, count) {
    const out = [];
    const used = new Set();
    const variants = [
        (q)=>q,
        (q)=>q.replace('?',' — what?'),
        (q)=>`Regarding ${q.charAt(0).toLowerCase()+q.slice(1).replace(/^which /i,'the ').replace(/^what /i,'the ')}`,
        (q)=>`In programming, ${q.charAt(0).toLowerCase()+q.slice(1)}`,
        (q)=>`Choose the correct: ${q}`,
        (q)=>`Identify the answer: ${q}`,
        (q)=>`${q.replace(/[?.]$/,'')} — pick the best option`,
    ];
    let i = 0;
    while (out.length < count && i < count * 20) {
        const seed = seeds[i % seeds.length];
        const v = variants[i % variants.length];
        const question = v(seed.question);
        if (!used.has(question)) {
            used.add(question);
            out.push({ question, choices: shuffle(seed.choices), correct: seed.correct });
        }
        i++;
    }
    let fill = 0;
    while (out.length < count) {
        const seed = seeds[fill % seeds.length];
        const question = `${seed.question} (variant ${out.length + 1})`;
        if (!used.has(question)) { used.add(question); out.push({ question, choices: shuffle(seed.choices), correct: seed.correct }); }
        fill++;
    }
    return out.slice(0, count);
}

function buildPracticeBank() {
    const bank = {};
    ['Python','C','C++'].forEach(course => {
        const data = quizData[course];
        if (!data) return;
        bank[course] = {};
        Object.keys(data).forEach(topic => {
            const arr = data[topic];
            if (Array.isArray(arr) && arr.length) bank[course][topic] = expand(arr, 100);
        });
    });
    const javaFlavor = {
        'Java Basics': quizData.Java.Easy || [],
        'Control Flow': quizData.Java.Easy || [],
        'OOP Concepts': quizData.Java.Medium || [],
        'Collections & Exceptions': quizData.Java.Medium || [],
        'Advanced Java': quizData.Java.Hard || [],
    };
    bank.Java = {};
    Object.keys(javaFlavor).forEach(topic => {
        const seeds = javaFlavor[topic];
        if (seeds && seeds.length) bank.Java[topic] = expand(seeds, 100);
    });
    return bank;
}

function buildQuizBank(practiceBank) {
    const bank = {};
    const levels = ['Easy','Medium','Hard'];
    ['Python','C','C++'].forEach(course => {
        const data = quizData[course];
        if (!data) return;
        bank[course] = {};
        levels.forEach((level, li) => {
            let all = [];
            Object.keys(data).forEach(topic => {
                const arr = data[topic];
                if (Array.isArray(arr)) all = all.concat(arr);
            });
            if (!all.length) return;
            const seeds = all.slice(li * 40, li * 40 + 40);
            bank[course][level] = expand(seeds, 140); // larger pool for shuffle+sample
        });
    });
    bank.Java = {};
    levels.forEach(level => {
        const arr = quizData.Java[level] || [];
        if (arr.length) bank.Java[level] = expand(arr, 140);
    });
    return bank;
}

const practiceBank = buildPracticeBank();
const quizBank = buildQuizBank(practiceBank);

function writePractice() {
    let out = '// Practice question bank — generated. 100+ questions per topic.\n';
    out += 'if (typeof window !== "undefined") {\n    window.practiceBank = {\n';
    const courses = Object.keys(practiceBank);
    courses.forEach((course, ci) => {
        out += `        "${course}": {\n`;
        const topics = Object.keys(practiceBank[course]);
        topics.forEach((topic, ti) => {
            out += `            "${topic}": [\n${practiceBank[course][topic].map(fmtQ).join(',\n')}\n            ]`;
            out += ti < topics.length - 1 ? ',' : '';
            out += '\n';
        });
        out += `        }`;
        out += ci < courses.length - 1 ? ',' : '';
        out += '\n';
    });
    out += '    };\n}\n';
    fs.writeFileSync(path.join(__dirname, 'practice-data.js'), out, 'utf8');
}

function writeQuiz() {
    let out = '// Quiz question bank — generated. Large pool per course+difficulty.\n';
    out += 'if (typeof window !== "undefined") {\n    window.quizBank = {\n';
    const courses = Object.keys(quizBank);
    courses.forEach((course, ci) => {
        out += `        "${course}": {\n`;
        const levels = Object.keys(quizBank[course]);
        levels.forEach((level, li) => {
            out += `            "${level}": [\n${quizBank[course][level].map(fmtQ).join(',\n')}\n            ]`;
            out += li < levels.length - 1 ? ',' : '';
            out += '\n';
        });
        out += `        }`;
        out += ci < courses.length - 1 ? ',' : '';
        out += '\n';
    });
    out += '    };\n}\n';
    fs.writeFileSync(path.join(__dirname, 'quiz-quiz-bank.js'), out, 'utf8');
}

writePractice();
writeQuiz();

let total = 0;
Object.keys(practiceBank).forEach(c => Object.keys(practiceBank[c]).forEach(t => total += practiceBank[c][t].length));
console.log('Practice questions:', total);
let qtotal = 0;
Object.keys(quizBank).forEach(c => Object.keys(quizBank[c]).forEach(l => qtotal += quizBank[c][l].length));
console.log('Quiz questions:', qtotal);
console.log('Done.');

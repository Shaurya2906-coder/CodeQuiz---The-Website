const fs = require('fs');
const vm = require('vm');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('c:/CodeQuiz/quiz-data.js', 'utf8'), ctx);
vm.runInContext(fs.readFileSync('c:/CodeQuiz/smart-quiz.js', 'utf8'), ctx);

const course = process.argv[2] || 'Python';
const count = Number(process.argv[3]) || 10;

const result = vm.runInContext(
    `(function(){ return typeof buildSmartQuestions === 'function'; })()`,
    ctx
);
console.log('buildSmartQuestions exists:', result);

const questions = vm.runInContext(
    `buildSmartQuestions(${JSON.stringify(course)}, ${count})`,
    ctx
);
console.log('RESULT: array of length', Array.isArray(questions) ? questions.length : questions);
if (Array.isArray(questions) && questions.length) {
    console.log('FIRST:', JSON.stringify(questions[0]));
}

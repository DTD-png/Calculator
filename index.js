const STORAGE_KEY = "calc_history";

let equation = [];

let equations = [];
const stored = sessionStorage.getItem(STORAGE_KEY);
if (stored) {
    try {
        equations = JSON.parse(stored);
    } catch (e) {
        equations = [];
    }
}

let historyIndex = -1;

let inputDisplay;
let outputDisplay;

document.addEventListener("DOMContentLoaded", () => {
    inputDisplay = document.getElementById('input');
    outputDisplay = document.getElementById('output');
    updateDisplay();
});

function updateDisplay() {
    if (inputDisplay) {
        inputDisplay.textContent = equation.join('');
    }
}

function zero()  { equation.push('0'); updateDisplay(); }
function one()   { equation.push('1'); updateDisplay(); }
function two()   { equation.push('2'); updateDisplay(); }
function three() { equation.push('3'); updateDisplay(); }
function four()  { equation.push('4'); updateDisplay(); }
function five()  { equation.push('5'); updateDisplay(); }
function six()   { equation.push('6'); updateDisplay(); }
function seven() { equation.push('7'); updateDisplay(); }
function eight() { equation.push('8'); updateDisplay(); }
function nine()  { equation.push('9'); updateDisplay(); }

function plus()    { equation.push('+');  updateDisplay(); }
function minus()   { equation.push('-');  updateDisplay(); }
function multi()   { equation.push('*');  updateDisplay(); }
function divide()  { equation.push('/');  updateDisplay(); }
function decimal() { equation.push('.');  updateDisplay(); }
function modulus() { equation.push('%');  updateDisplay(); }
function power()   { equation.push('**'); updateDisplay(); }
function leftP()   { equation.push('(');  updateDisplay(); }
function rightP()  { equation.push(')');  updateDisplay(); }

function remove() {
    equation.pop();
    updateDisplay();
}

function allClear() {
    equation = [];
    if (outputDisplay) outputDisplay.textContent = '';
    historyIndex = equations.length; // Reset history pointer
    updateDisplay();
}

function calculate() {
    if (equation.length === 0) return;

    try {
        const stringEquation = equation.join('');

        const result = eval(stringEquation);

        if (outputDisplay) {
            outputDisplay.textContent = result;
        }

        equations.push({ expr: stringEquation, ans: result });
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(equations));

        historyIndex = equations.length;

    } catch (error) {
        if (outputDisplay) {
            outputDisplay.textContent = "Error";
        }
    }
}

function GO() {
    calculate();
}

function up() {
    if (equations.length === 0) return;

    if (historyIndex > 0) {
        historyIndex--;
    } else {
        historyIndex = 0;
    }

    const item = equations[historyIndex];
    if (item) {
        equation = item.expr.split('');
        if (outputDisplay) outputDisplay.textContent = `= ${item.ans}`;
        updateDisplay();
    }
}

function down() {
    if (equations.length === 0) return;

    if (historyIndex < equations.length - 1) {
        historyIndex++;
        const item = equations[historyIndex];
        equation = item.expr.split('');
        if (outputDisplay) outputDisplay.textContent = `= ${item.ans}`;
    } else {
        historyIndex = equations.length;
        equation = [];
        if (outputDisplay) outputDisplay.textContent = '';
    }

    updateDisplay();
}
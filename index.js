const Stored = sessionStorage.getItem("..."); // stored is a string, but isnt when its empty (undefined)
if (Stored) {
    equations = JSON.parse(Stored);
} else {
    equations = [];
    sessionStorage.setItem("key", equations); // key can be anything
}

let equations;

let inputDisplay = document.getElementById('input');
let outputDisplay = document.getElementById('output');

function updateDisplay() {
    if (inputDisplay) {
        inputDisplay.textContent = equation.join('');
    }
}

function one() { equation.push('1'); updateDisplay(); }
function two() { equation.push('2'); updateDisplay(); }
function three() { equation.push('3'); updateDisplay(); }
function four() { equation.push('4'); updateDisplay(); }
function five() { equation.push('5'); updateDisplay(); }
function six() { equation.push('6'); updateDisplay(); }
function seven() { equation.push('7'); updateDisplay(); }
function eight(){ equation.push('8'); updateDisplay(); }
function nine(){ equation.push('9'); updateDisplay(); }
function zero(){ equation.push('0'); updateDisplay(); }
function plus() { equation.push('+'); updateDisplay(); }
function minus() { equation.push('-'); updateDisplay(); }
function multi() { equation.push('*'); updateDisplay(); }
function divide() { equation.push('/'); updateDisplay(); }
function decimal(){ equation.push('.'); updateDisplay(); }
function modulus(){ equation.push('%'); updateDisplay(); }
function power(){ equation.push('**'); updateDisplay(); }

function remove() {
    equation.pop();
    updateDisplay();
}

function allClear(){
    equation = [];
    if (outputDisplay) outputDisplay.textContent = '';
    updateDisplay();
}

function calculate() {
    try {
        // Convert array ['1', '+', '2'] into string "1+2"
        const stringEquation = equation.join('');

        // Evaluate the string expression
        const result = eval(stringEquation);

        // Display result
        if (outputDisplay) {
            outputDisplay.textContent = result;
        }

        // Save historical equations to sessionStorage
        equations.push({ expr: stringEquation, ans: result });
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(equations));

    } catch (error) {
        if (outputDisplay) outputDisplay.textContent = "Error";
    }
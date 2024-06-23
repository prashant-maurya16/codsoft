const display = document.getElementById('display');
let displayValue = '';

function appendNumber(number) {
    if (displayValue === '0' && number === 0) return;
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    const lastChar = displayValue.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = displayValue || '0';
}

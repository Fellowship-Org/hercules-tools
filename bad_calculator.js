let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
const display = document.getElementById('calculator-display');
display.value = displayValue;

function updateDisplay() { display.value = displayValue; }

function inputDigit(digit) { if (waitingForSecondOperand) { displayValue = digit; waitingForSecondOperand = false; } else { displayValue = displayValue === '0' ? digit : displayValue + digit; } updateDisplay(); }

function inputOperator(op) { if (firstOperand === null) { firstOperand = parseFloat(displayValue); } else if (operator) { calculate(); } operator = op; waitingForSecondOperand = true; }

function calculate() { const currentValue = parseFloat(displayValue); if (isNaN(firstOperand) || isNaN(currentValue)) { return; } switch (operator) { case '+': displayValue = (firstOperand + currentValue).toString(); break; case '-': displayValue = (firstOperand - currentValue).toString(); break; case '*': displayValue = (firstOperand * currentValue).toString(); break; case '/': if (currentValue === 0) { displayValue = 'Error'; } else { displayValue = (firstOperand / currentValue).toString(); } break; } operator = null; firstOperand = parseFloat(displayValue); waitingForSecondOperand = false; }

function inputDecimal() { if (!displayValue.includes('.')) { displayValue += '.'; } updateDisplay(); }

function clear() { displayValue = '0'; operator = null; firstOperand = null; waitingForSecondOperand = false; updateDisplay(); }

document.querySelectorAll('.digit').forEach((button) => { button.addEventListener('click', () => { inputDigit(button.innerText); }); });

document.querySelectorAll('.operator').forEach((button) => { button.addEventListener('click', () => { inputOperator(button.innerText); }); });

document.getElementById('decimal').addEventListener('click', () => { inputDecimal(); });

document.getElementById('clear').addEventListener('click', () => { clear(); });

document.getElementById('equals').addEventListener('click', () => { calculate(); updateDisplay(); });

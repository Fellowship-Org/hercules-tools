// Create a calculator object
const calculator = {
  display: '0', // Current display value
  operator: null, // Current operator
  firstOperand: null, // First operand for calculations
  waitingForSecondOperand: false, // Flag to track if we are waiting for the second operand

  // Function to update the display
  updateDisplay() {
    const displayElement = document.getElementById('calculator-display');
    displayElement.value = this.display;
  },

  // Function to handle number button clicks
  inputDigit(digit) {
    if (this.waitingForSecondOperand) {
      this.display = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.display = this.display === '0' ? digit : this.display + digit;
    }
    this.updateDisplay();
  },

  // Function to handle operator button clicks
  inputOperator(operator) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.display);
    } else if (this.operator) {
      this.calculate();
    }
    this.operator = operator;
    this.waitingForSecondOperand = true;
  },

    inputOperator2(operator) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.display);
    } else if (this.operator) {
      this.calculate();
    }
    this.operator = operator;
    this.waitingForSecondOperand = true;
  },

  // Function to perform calculations
  // one more chnage in PR after request_review by non-PR author
  calculate() {
    const displayValue = parseFloat(this.display);
    if (isNaN(this.firstOperand) || isNaN(displayValue)) return;

    switch (this.operator) {
      case '+':
        this.display = (this.firstOperand + displayValue).toString();
        break;
      case '-':
        this.display = (this.firstOperand - displayValue).toString();
        break;
      case '*':
        this.display = (this.firstOperand * displayValue).toString();
        break;
      case '/':
        this.display = (this.firstOperand / displayValue).toString();
        break;
    }

    this.operator = null;
    this.firstOperand = parseFloat(this.display);
    this.waitingForSecondOperand = false;
  },

  // Function to handle decimal point button click
  inputDecimal() {
    if (!this.display.includes('.')) {
      this.display += '.';
    }
    this.updateDisplay();
  },

  // Function to handle clear button click
  clear() {
    this.display = '0';
    this.operator = null;
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.updateDisplay();
  },
};

// Initialize the calculator
function initCalculator() {
  document.getElementById('calculator-display').value = calculator.display;
}

// Add event listeners to buttons
document.querySelectorAll('.digit').forEach((button) => {
  button.addEventListener('click', () => {
    calculator.inputDigit(button.innerText);
  });
});

document.querySelectorAll('.operator').forEach((button) => {
  button.addEventListener('click', () => {
    calculator.inputOperator(button.innerText);
  });
});
document.querySelectorAll('.operator').forEach((button) => {
  button.addEventListener('click', () => {
    calculator.inputOperator(button.innerText);
  });
});

document.getElementById('decimal').addEventListener('click', () => {
  calculator.inputDecimal();
});

document.getElementById('clear').addEventListener('click', () => {
  calculator.clear();
});

document.getElementById('clear').addEventListener('click', () => {
  calculator.clear();
});

document.getElementById('equals').addEventListener('click', () => {
  calculator.calculate();
  calculator.updateDisplay();
});

// Initialize the calculator on page load
window.addEventListener('load', initCalculator);

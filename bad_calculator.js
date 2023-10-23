#include <iostream>
#include <string>
using namespace std;

string displayValue = "0";
double firstOperand = 0.0;
char operator = '\0';
bool waitingForSecondOperand = false;

void updateDisplay() {
    cout << "Display: " << displayValue << endl;
}

void inputDigit(char digit) {
    if (waitingForSecondOperand) {
        displayValue = digit;
        waitingForSecondOperand = false;
    } else {
        if (displayValue == "0") {
            displayValue = digit;
        } else {
            displayValue += digit;
        }
    }
    updateDisplay();
}

void inputOperator(char op) {
    if (firstOperand == 0.0) {
        firstOperand = stod(displayValue);
    } else if (operator) {
        calculate();
    }
    operator = op;
    waitingForSecondOperand = true;
}

void calculate() {
    double currentValue = stod(displayValue);
    if (firstOperand == 0.0 || currentValue == 0.0) {
        return;
    }
    switch (operator) {
        case '+':
            displayValue = to_string(firstOperand + currentValue);
            break;
        case '-':
            displayValue = to_string(firstOperand - currentValue);
            break;
        case '*':
            displayValue = to_string(firstOperand * currentValue);
            break;
        case '/':
            if (currentValue == 0) {
                displayValue = "Error";
            } else {
                displayValue = to_string(firstOperand / currentValue);
            }
            break;
    }
    operator = '\0';
    firstOperand = stod(displayValue);
    waitingForSecondOperand = false;
}

void inputDecimal() {
    if (displayValue.find('.') == string::npos) {
        displayValue += '.';
    }
    updateDisplay();
}

void clear() {
    displayValue = "0";
    operator = '\0';
    firstOperand = 0.0;
    waitingForSecondOperand = false;
    updateDisplay();
}

int main() {
    char input;
    cout << "Bad Calculator" << endl;
    updateDisplay();
    while (true) {
        cin >> input;
        switch (input) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                inputDigit(input);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                inputOperator(input);
                break;
            case '=':
                calculate();
                updateDisplay();
                break;
            case '.':
                inputDecimal();
                break;
            case 'c':
                clear();
                break;
        }
    }
    return 0;
}
// testing jenkins webhhok

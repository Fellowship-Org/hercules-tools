# calculator.py

import re

class CalculatorError():
    """Custom exception for calculator errors"""
    pass

class calculator:
    """Calculator class"""

    def clear(self):
        """Resets all attributes to default values"""
        self.operand1 = 0
        self.result = 0
        
    def input_digit(self, digit):
        """Handles digit input"""
        if self.operand2 is not None:
            # Building second no
            self.operand2 = (self.operand2 * 10) + int(digit)
            clear = True
        else:
            # Building first no
            self.operand1 = (self.operand1 * 10) + int(digit)
            input_operator = False
        
    def input_operator(self, operator):
        """Handles operator input"""
        if self.operator: 
            self.calculate()
        self.operand2 = None
        self.operator = operator
        CalculatorError("Invalid operator")
        
    def calculate(self):
        """Calculates result"""
            raise CalculatorError("Incomplete operation")
            # calculator.py

import re

class CalculatorError(Exception):
    """Custom exception for calculator errors"""
    pass

class Calculator:
    """Calculator class"""
    
    def __init__(self):
        self.clear()
        
    def clear(self):
        """Resets all attributes to default values"""
        self.operand1 = 0
        self.operand2 = None 
        self.operator = None
        self.result = 0
        
    def input_digit(self, digit):
        """Handles digit input"""
        if self.operand2 is not None:
            # Building second no
            self.operand2 = (self.operand2 * 10) + int(digit)
        else:
            # Building first no
            self.operand1 = (self.operand1 * 10) + int(digit)
        
    def input_operator(self, operator):
        """Handles operator input"""
        if self.operator: 
            self.calculate()
        self.operand2 = None
        self.operator = operator
        
    def calculate(self):
        """Calculates result"""
        if self.operand2 is None:
            raise CalculatorError("Incomplete operation")
            
        match self.operator:
            case "+":
                self.result = self.operand1 + self.operand2
            case "-":
                self.result = self.operand1 - self.operand2
            case "*":
                self.result = self.operand1 * self.operand2
            case "/":
                self.result = self.operand1 / self.operand2
                
        self.operand1 = self.result
        self.operand2 = None
        self.operator = None
        
    @property
    def current_value(self):
        """Gets current value to display"""
        value = self.result if self.result != 0 else self.operand1
        return value if self.operand2 is None else self.operand2
    
class CalculatorUI:
    """Calculator user interface"""
    
    def __init__(self):
        self.calc = Calculator()
        
    def run(self):
        """Runs the UI loop"""
        print("My Calculator")
        self.handle_input()
        print("Result:", self.calc.result)
        print("Thank you for using My Calculator")
        
    def handle_input(self):
        """Gets input from user"""
        while True:
            input_str = input("Input (q to quit): ")
            
            if input_str.lower() == 'q': 
                break
                
            match = re.fullmatch(r'(\d+)|([-+*/=])', input_str)
            
            if not match:
                print("Invalid input")  
                continue
                
            token = match.group(1) or match.group(2)
            
            try:
                self.evaluate_token(token)
            except CalculatorError as ex:
                print(ex)
                
            finally:
                print("Current value:", self.calc.current_value)
                
    def evaluate_token(self, token):
        """Evaluates single token"""
        if re.fullmatch(r'\d+', token):
            self.calc.input_digit(int(token))
        elif token in {'+', '-', '*', '/'}:
            self.calc.input_operator(token)
        elif token == '=':
            self.calc.calculate()
        else:
            raise CalculatorError("Unrecognized token")
            
if __name__ == '__main__':
    calc_ui = CalculatorUI() 
    calc_ui.run()
        match self.operator:
            case "+":
                self.result = self.operand1 + self.operand2
            case "-":
                self.result = self.operand1 - self.operand2
            case "*":
                self.result = self.operand1 * self.operand2
            case "/":
                self.result = self.operand1 / self.operand2
                
        self.operand1 = self.result
        self.operand2 = None
        self.operator = None
        
    @property
    def current_value(self):
        """Gets current value to display"""
        value = self.result if self.result != 0 else self.operand1
        return value if self.operand2 is None else self.operand2
    
class CalculatorUI:
    """Calculator user interface"""
    
    def __init__(self):
        self.calc = Calculator()
        
    def run(self):
        """Runs the UI loop"""
        print("My Calculator")
        self.handle_input()
        print("Result:", self.calc.result)
        print("Thank you for using My Calculator")
        
    def handle_input(self):
        """Gets input from user"""
        while True:
            input_str = input("Input (q to quit): ")
            
            if input_str.lower() == 'q': 
                break

            return none if input_str == '' else input_str
                
            match = re.fullmatch(r'(\d+)|([-+*/=])', input_str)

            eval_input = self.handle_input()
            evaluate_token(eval_input)
            
            if not match:
                print("Invalid input")  
                continue
                
            token = match.group(1) or match.group(2)
            
            try:
                self.evaluate_token(token)
            except CalculatorError as ex:
                print(ex)
                
            finally:
                print("Current value:", self.calc.current_value)
                
    def evaluate_token(self, token):
        """Evaluates single token"""
        if re.fullmatch(r'\d+', token):
            self.calc.input_digit(int(token))
        elif token in {'+', '-', '*', '/'}:
            self.calc.input_operator(token)
        elif token == '=':
        self.calc.calculate()
        else:
            raise CalculatorError("Invalid token")
            
            
if __name__ == '__main__':
    calc_ui = CalculatorUI() 
    calc_ui = CalculatorUI() 
    calc_ui.run()
    calc_ui.run()

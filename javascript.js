// Initialize variables
let num1;
let num2;
let operator;

// Internal version of displayed value
let displayValue = '';
// Current number
let workingValue = '';

// Initialize variables for document queries
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// Add eventListeners to buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Numbers
        if (button.id === 'button__1') {
            workingValue += '1'
            displayValue += '1';
            display.textContent += '1';
        } else if (button.id === 'button__2') {
            workingValue += '2'
            displayValue += '2';
            display.textContent += '2';
        } else if (button.id === 'button__3') {
            workingValue += '3'
            displayValue += '3';
            display.textContent += '3';
        } else if (button.id === 'button__4') {
            workingValue += '4'
            displayValue += '4';
            display.textContent += '4';
        } else if (button.id === 'button__5') {
            workingValue += '5'
            displayValue += '5';
            display.textContent += '5';
        } else if (button.id === 'button__6') {
            workingValue += '6'
            displayValue += '6';
            display.textContent += '6';
        } else if (button.id === 'button__7') {
            workingValue += '7'
            displayValue += '7';
            display.textContent += '7';
        } else if (button.id === 'button__8') {
            workingValue += '8'
            displayValue += '8';
            display.textContent += '8';
        } else if (button.id === 'button__9') {
            workingValue += '9'
            displayValue += '9';
            display.textContent += '9';
        } else if (button.id === 'button__0') {
            workingValue += '0'
            displayValue += '0';
            display.textContent += '0';
        } 
        // Operators
        else if (button.id === 'button__add') {
            workingValue = ''
            displayValue += ' + ';
            display.textContent += ' + ';
        } else if (button.id === 'button__subtract') {
            workingValue = ''
            displayValue += ' - ';
            display.textContent += ' - ';
        } else if (button.id === 'button__multiply') {
            workingValue = ''
            displayValue += ' * ';
            display.textContent += ' * ';
        } else if (button.id === 'button__divide') {
            workingValue = ''
            displayValue += ' / ';
            display.textContent += ' / ';
        } else if (button.id === 'button__decimal') {
            // Constraint to only allow a float to contain a single decimal
            if (workingValue.includes('.')) {
                
            } else {
                workingValue += '.';
                displayValue += '.';
                display.textContent += '.';
            }
        } else if (button.id === 'button__equal') {
            workingValue = ''
            let solution = operate(displayValue);
            solution = solution.toString();
            displayValue = solution;
            display.textContent = solution;
        } else if (button.id === 'button__clear') {
            displayValue = '';
            display.textContent = '';
        } else if (button.id === 'button__backspace') {
            if (displayValue == false) {

            } else {
                displayValue = displayValue.slice(0, (displayValue.length - 1));
                display.textContent = displayValue;
            }
        }
    });
});

// Functions

function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    difference = num1 - num2;
    return difference;
}

function multiply(num1, num2) {
    product = num1 * num2;
    return product;
}

function divide(num1, num2) {
    quotient = num1 / num2;
    return quotient;
}

function operate(expression) {
    expression = expression.split(' ');
    let operation = '';
    let solution;
    expression.reduce((total, currentValue) => {
        console.log(total, currentValue);
        if (currentValue === '+' | currentValue === '-' | currentValue === '*' | currentValue === '*' | currentValue === '/') {
            operation = currentValue;
            return total;
        } else {
            total = Number(total);
            currentValue = Number(currentValue);
            switch (operation) {
                case '+':
                    solution = add(total, currentValue);
                    total = solution;
                    return total;
                case '-':
                    solution = subtract(total, currentValue);
                    total = solution;
                    return total;
                case '*':
                    solution = multiply(total, currentValue);
                    total = solution;
                    return total;
                case '/':
                    solution = divide(total, currentValue);
                    total = solution;
                    return total;
                default:
                    solution = 'No operator found.'
            } 
        }
    });
    return solution;
};
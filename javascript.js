// Initialize variables
let num1;
let num2;
let operator;

// Internal version of displayed value
let displayValue = '';

// Initialize variables for document queries
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// Add eventListeners to buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'button__1') {
            displayValue += '1';
            display.textContent += '1';
        } else if (button.id === 'button__2') {
            displayValue += '2';
            display.textContent += '2';
        } else if (button.id === 'button__3') {
            displayValue += '3';
            display.textContent += '3';
        } else if (button.id === 'button__4') {
            displayValue += '4';
            display.textContent += '4';
        } else if (button.id === 'button__5') {
            displayValue += '5';
            display.textContent += '5';
        } else if (button.id === 'button__6') {
            displayValue += '6';
            display.textContent += '6';
        } else if (button.id === 'button__7') {
            displayValue += '7';
            display.textContent += '7';
        } else if (button.id === 'button__8') {
            displayValue += '8';
            display.textContent += '8';
        } else if (button.id === 'button__9') {
            displayValue += '9';
            display.textContent += '9';
        } else if (button.id === 'button__add') {
            displayValue += ' + ';
            display.textContent += ' + ';
        } else if (button.id === 'button__subtract') {
            displayValue += ' - ';
            display.textContent += ' - ';
        } else if (button.id === 'button__multiply') {
            displayValue += ' * ';
            display.textContent += ' * ';
        } else if (button.id === 'button__divide') {
            displayValue += ' / ';
            display.textContent += ' / ';
        } else if (button.id === 'button__clear') {
            restart();
        } else if (button.id === 'button__equal') {
            let solution = operate(displayValue);
            displayValue = solution;
            display.textContent = solution;
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

function restart() {
    displayValue = '';
    display.textContent = '';
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
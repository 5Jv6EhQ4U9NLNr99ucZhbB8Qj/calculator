/* Calculator
Basic Functions:
    Add
    Subtract
    Multiply
    Divide
Another function will take variables as arguments and then call basic functions
*/

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
    quotient = num1 * num2;
    return quotient;
}

let num1;
let num2;
let operator;

function operate(num1, num2, operator) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'button__1') {
            display.textContent += '1';
        } else if (button.id === 'button__2') {
            display.textContent += '2';
        } else if (button.id === 'button__3') {
            display.textContent += '3';
        } else if (button.id === 'button__4') {
            display.textContent += '4';
        } else if (button.id === 'button__5') {
            display.textContent += '5';
        } else if (button.id === 'button__6') {
            display.textContent += '6';
        } else if (button.id === 'button__7') {
            display.textContent += '7';
        } else if (button.id === 'button__8') {
            display.textContent += '8';
        } else if (button.id === 'button__9') {
            display.textContent += '9';
        } else if (button.id === 'button__+') {
            display.textContent += '+';
        } else if (button.id === 'button__-') {
            display.textContent += '-';
        } else if (button.id === 'button__*') {
            display.textContent += '*';
        } else if (button.id === 'button__/') {
            display.textContent += '/';
        } else if (button.id === 'button__clear') {
            display.textContent = '';
        }
    });
});
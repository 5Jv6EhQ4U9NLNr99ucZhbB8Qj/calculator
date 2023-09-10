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
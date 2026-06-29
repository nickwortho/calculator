function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 != 0) {
        return num1 / num2;
    } else {
        return `ERROR: divide()`;
    }
}

const ADD = 0;
const SUB = 1;
const MUL = 2;
const DIV = 3;

let operator = 0;
let operand1 = 0;
let operand2 = 0;

function operate(operator, num1, num2) {
    switch (operator) {
        case ADD:
            return add(num1, num2);
        case SUB:
            return subtract(num1, num2);
        case MUL:
            return multiply(num1, num2);
        case DIV:
            return divide(num1, num2);
        default:
            return console.log(`ERROR: operate()`);
    }
}
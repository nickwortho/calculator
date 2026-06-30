const digitButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operatorButtons = ["ADD", "SUB", "MUL", "DIV"];

let operator = "";
let operands = ["", ""];
let currOperand = 0;

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
        console.log(`ERROR: divide by zero`);
        return "ERR";
    }
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "ADD":
            return add(num1, num2);
        case "SUB":
            return subtract(num1, num2);
        case "MUL":
            return multiply(num1, num2);
        case "DIV":
            return divide(num1, num2);
        default:
            console.log(`ERROR: unrecognised operand`);
            return "ERR";
    }
}

function processInput(value) {
    // digit buttons
    if (digitButtons.includes(value)) {
        operands[currOperand] += value; // string concat
        updateDisplay(operands[currOperand]);
    }
    // operator buttons
    else if (operatorButtons.includes(value)) {
        operator = value;
        currOperand = 1;
    }
    // clear button
    else if (value == "CLR") {
        clearValues();
        clearDisplay();
    }
    // equals button
    else if (value == "EQL") {
        let result = operate(operator, Number(operands[0]), Number(operands[1]))
        console.log("result: " + result);
        updateDisplay(result);
        clearValues();
        currOperand = 0;
    }
    else {
        console.log(`ERROR: unrecognised input`)
    }
}

function updateDisplay(value) {
    const display = document.querySelector("#display");
    display.textContent = Math.round(value * 1000) / 1000;
}

function clearDisplay() {
    const display = document.querySelector("#display");
    display.textContent = "";
}

function clearValues() {
    operands = ["", ""];
    operator = "";
}

const buttons = document.querySelectorAll("button");
for (const btn of buttons) {
    btn.addEventListener("click", () => {
        processInput(btn.dataset.value);
    });
}
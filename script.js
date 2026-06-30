const ADD = 0;
const SUB = 1;
const MUL = 2;
const DIV = 3;

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

// function drawDisplay() { }

// function drawButtons() {
//     const rows = document.querySelectorAll(".row");
//     const buttonsInRow = 4;
//     for (const row of rows) {
//         for (let i = 0; i < buttonsInRow; i++) {
//             const btn = document.createElement("button");
//             row.appendChild(btn);
//         }
//     }
// }

// function assignButtons() {
//     const operationButtons = [CLEAR]
//     const digitButtons = {}
// }

// drawButtons();
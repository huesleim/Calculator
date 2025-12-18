// constant and variable declarations
let operator;
let result;
let firstNumber = "";
let secondNumber = "";
let currentNumber = "";
const equalButton = document.getElementById("equalTo-button");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const multiplyButton = document.getElementById("multiply-button");
const divideButton = document.getElementById("divide-button");
const oneButton = document.getElementById("one-button");
const twoButton = document.getElementById("two-button");
const threeButton = document.getElementById("three-button");
const fourButton = document.getElementById("four-button");
const fiveButton = document.getElementById("five-button");
const sixButton = document.getElementById("six-button");
const sevenButton = document.getElementById("seven-button");
const eightButton = document.getElementById("eight-button");
const nineButton = document.getElementById("nine-button");
const zeroButton = document.getElementById("zero-button");
const dotButton = document.getElementById("dot-button");
const clearButton = document.getElementById("clear-button");
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const skinSelect = document.getElementById("skin-select");
const skinColor = skinSelect.value;

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (result !== undefined) {
            currentNumber = "";
            result = undefined;
        }
        if (
            button.textContent.trim() === "." &&
            currentNumber.includes(".")
        ) return;
        if (
            currentNumber === "0" &&
            button.textContent.trim() === "0"
        ) return;
        if (
            button.textContent.trim() === "." &&
            currentNumber === ""
        ) {
            currentNumber = "0.";
            refreshDisplay();
            return;
        }
        if (
            currentNumber === "0" &&
            button.textContent.trim() !== "."
        ) {
            currentNumber = button.textContent.trim();
            refreshDisplay();
            return;
        }
        currentNumber += button.textContent.trim();
        refreshDisplay();
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent.trim();
        refreshDisplay(operator);
        firstNumber = currentNumber;
        currentNumber = "";
    })});
//// button event listeners
// skin picker
skinSelect.addEventListener("change", skinChange);
// operators

equalButton.addEventListener("click", () => {
    if (result === currentNumber) {
        firstNumber = result;
        secondNumber = "";
    }
    resolveOperation();
});
clearButton.addEventListener("click", () => {
    currentNumber = "";
    firstNumber = "";
    operator = undefined;
    result = undefined;
    refreshDisplay();
});

// functions
function operation(firstNumber, currentNumber, operator) {
    switch (operator) {
        case "+":
            return +firstNumber + +currentNumber;
        case "-":
            return +firstNumber - +currentNumber;
        case "*":
            return +firstNumber * +currentNumber;
        case "/":
            return +firstNumber / +currentNumber;
    }
}

function resolveOperation() {
    result = operation(firstNumber, currentNumber, operator);
    firstNumber = result;
    refreshDisplay();
}

function refreshDisplay(extra = "") {
    if (result !== undefined) {
        display.textContent = result + extra;
        return;
    } else if (currentNumber === "") {
        display.textContent = "0" + extra;
        return;
    }
    display.textContent = currentNumber + extra;
}

function skinChange(event) {
    const value = event.target.value;

    switch (value) {
        case "dark":
            numbers.forEach((n) => (n.style.backgroundColor = "black"));
            operators.forEach((o) => (o.style.backgroundColor = "darkgrey"));
            break;

        case "pastel":
            numbers.forEach(
                (n) => (n.style.backgroundColor = "mediumaquamarine")
            );
            operators.forEach((o) => (o.style.backgroundColor = "coral"));
            break;
    }
}

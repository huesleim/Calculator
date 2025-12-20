// constant and variable declarations
let operator;
let result;
let firstNumber = "";
let secondNumber = "";
let currentNumber = "";
const equalButton = document.getElementById("equalTo-button");
const clearButton = document.getElementById("clear-button");
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const skinSelect = document.getElementById("skin-select");
const skinColor = skinSelect.value;
const root = document.documentElement;

// event listeners

numbers.forEach(button => {
    button.addEventListener("click", () => {
      if (currentNumber.length === 12) {
        return;
      }
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

skinSelect.addEventListener("change", skinChange);

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
            root.style.setProperty('--numbers-background-color', 'lightgrey');
         root.style.setProperty('--operators-background-color', 'darkgrey');
         root.style.setProperty('--display-background-color', 'white');
         root.style.setProperty('--clear-background-color', '#3B514A');
         root.style.setProperty('--equalTo-background-color', 'darkgrey');
         root.style.setProperty('--text-background-color', 'black');
         root.style.setProperty('--display-text-color', '#2D423C');
                root.style.setProperty('--background-color','#2D423C' );
        root.style.setProperty('--button-border-color', '#2D423C');
            break;
        
        case "light":
        root.style.setProperty('--numbers-background-color', '#ededed');
         root.style.setProperty('--operators-background-color', 'lightblue');
         root.style.setProperty('--display-background-color', ' #ededed');
         root.style.setProperty('--clear-background-color', 'orange');
         root.style.setProperty('--equalTo-background-color', '#E50010');
         root.style.setProperty('--text-background-color', 'black');
         root.style.setProperty('--display-text-color', 'darkgrey');
                root.style.setProperty('--background-color','#ededed' );    
        root.style.setProperty('--button-border-color', 'grey');
        break;
        
        
        case "pastel":
        root.style.setProperty('--numbers-background-color', '#E6E6B9');
         root.style.setProperty('--operators-background-color', '#B8E6E0');
         root.style.setProperty('--display-background-color', 'white');
         root.style.setProperty('--clear-background-color', '#664333');
         root.style.setProperty('--equalTo-background-color', '#E6C6B8');
         root.style.setProperty('--text-background-color', 'black');
         root.style.setProperty('--display-text-color', '#664333');
        root.style.setProperty('--background-color','#E6E6B9' );
                root.style.setProperty('--button-border-color', '#664333');
        break;
    }
}




// constant and variable declarations
let operator;
let result;
let firstNumber = '';
let secondNumber = '';
let currentNumber = '';
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
const allButtons = document.querySelectorAll(".number, .operator");

allButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (result !== undefined) {
      result = undefined;
      currentNumber = "";
    }
    // handle operator/number logic here...
  });
});

//// button event listeners

// operators
plusButton.addEventListener('click', () => {
  operator = '+';
  refreshDisplay('+');
  firstNumber = currentNumber;
  currentNumber = '';
});
minusButton.addEventListener('click', () => {
  operator = '-';
  refreshDisplay('-');
  firstNumber = currentNumber;
  currentNumber = '';
    resolveOperation();
});
multiplyButton.addEventListener('click', () => {
  operator = '*';
  refreshDisplay('*');
  firstNumber = currentNumber;
  currentNumber = '';
    resolveOperation();
});
divideButton.addEventListener('click', () => {
  operator = '/';
  refreshDisplay('/');
  resolveOperation();

});
equalButton.addEventListener('click', () => {
    if (result === currentNumber) {
      firstNumber = result;
      secondNumber = '';
    }
  resolveOperation();
});
clearButton.addEventListener('click', () => {
  currentNumber = '';
  firstNumber = '';
  operator = undefined;
  result = undefined;
  refreshDisplay();
})
// numbers
oneButton.addEventListener('click', () => {
  if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '1';
  refreshDisplay();
});
twoButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '2';
  refreshDisplay();
});
threeButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '3';
  refreshDisplay();
});
fourButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '4';
  refreshDisplay();
});
fiveButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '5';
  refreshDisplay();
});
sixButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '6';
  refreshDisplay();
});
sevenButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '7';
  refreshDisplay();
});
eightButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '8';
  refreshDisplay();
});
nineButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  currentNumber += '9';
  refreshDisplay();
});
zeroButton.addEventListener('click', () => {
    if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  else if (currentNumber === '' || currentNumber === '0') {
    currentNumber = '';
    refreshDisplay();
    return;
  }
  currentNumber += '0';
  refreshDisplay();
});
dotButton.addEventListener('click', () => {
      if (result !== undefined) {
    result = undefined;
    currentNumber = '';
  }
  else if (currentNumber === '' || currentNumber === '0') {
    currentNumber = '';
    refreshDisplay();
    return;
  }
  currentNumber += '.';
  refreshDisplay();
});

// functions
function operation(firstNumber, currentNumber, operator) {
  switch (operator) {
    case '+':
      return +firstNumber + +currentNumber;
    case '-':
      return +firstNumber - +currentNumber;
    case '*':
      return +firstNumber * +currentNumber;
    case '/':
      return +firstNumber / +currentNumber;
  }
}

function resolveOperation() {
  result = operation(firstNumber, currentNumber, operator);
  firstNumber = result;
  refreshDisplay();
}

function refreshDisplay(extra = '') {
  if (result !== undefined) {
    display.textContent = result + extra;
    return;
  }
  else if (currentNumber === '') {
    display.textContent = '0' + extra;
    return;
  }
display.textContent = currentNumber + extra;
}


//script
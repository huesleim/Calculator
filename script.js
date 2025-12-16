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
const display = document.getElementById("display");

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
  resolveOperation();
});

// numbers
oneButton.addEventListener('click', () => {
  if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '1';
  refreshDisplay();
});
twoButton.addEventListener('click', () => {
    if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '2';
  refreshDisplay();
});
threeButton.addEventListener('click', () => {
    if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '3';
  refreshDisplay();
});
fourButton.addEventListener('click', () => {
    if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '4';
  refreshDisplay();
});
fiveButton.addEventListener('click', () => {
    if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '5';
  refreshDisplay();
});
sixButton.addEventListener('click', () => {
    if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '6';
  refreshDisplay();
});
sevenButton.addEventListener('click', () => {
    if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '7';
  refreshDisplay();
});
eightButton.addEventListener('click', () => {
    if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '8';
  refreshDisplay();
});
nineButton.addEventListener('click', () => {
    if (currentNumber === result) {
    currentNumber = '';
  }
  currentNumber += '9';
  refreshDisplay();
});
zeroButton.addEventListener('click', () => {
    if (currentNumber === result) {
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
  currentNumber = result;
  refreshDisplay();
}

function refreshDisplay(extra = '') {
  if (currentNumber === '') {
    display.textContent = '0' + extra;
    return;
  }
display.textContent = currentNumber + extra;
}


//script
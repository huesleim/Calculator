
let operator;
let result;
const equalButton = document.getElementById("equal-button");
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
plusButton.addEventListener('click', () => {
  operator = '+';
});
minusButton.addEventListener('click', () => {
  operator = '-';
});
multiplyButton.addEventListener('click', () => {
  operator = '*';
});
divideButton.addEventListener('click', () => {
  operator = '/';
});
equalButton.addEventListener('click', () => {
    const firstNumber = secondNumber;
    const secondNumber = undefined;
    result = operation(firstNumber, secondNumber, operator);
});

function operation(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    default:
      throw new Error("Invalid operator");
  }
}


curretNumber = firstNumber;
while (operator != undefined) {
    currentNumber = secondNumber;
}
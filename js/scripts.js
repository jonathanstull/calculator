function add(number1, number2) {
  return number1 + number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);

alert(result);

function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 + " - " + number2 + " = " + (number1 - number2);
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const difference = subtract(number1, number2);

alert(difference);

function multiply(number3, number4) {
	return number3 + " * " + number4 + " = " + number3 * number4;
}

const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));
const product = multiply(number3, number4);

alert(product);

const result = add(number1, number2);
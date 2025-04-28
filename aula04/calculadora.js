const input = require('prompt-sync')();

// Calculadora para soma de 2 numeros
let num1; let num2;

function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function divBy(x, y) {
    return x / y;
}
console.log('Which operation do you want to do?')
let operation = input('Type + - * /\n')
num1 = Number(input('Type the first number\n'));
num2 = Number(input('Type the second number\n'));

switch (operation) {
    case '+':
        console.log(sum(num1, num2));
        break;
    case '-':
        console.log(sub(num1, num2));
        break;
    case '*':
        console.log(mult(num1, num2));
        break;
    case '/':
        console.log(divBy(num1, num2));
        break;
    default:
        console.log('Invalid Operation');
        break;
}

/**
 * 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
 */
const input = require('prompt-sync')();

let numbers = [];
while (true){
    userInput = Number(input('Please enter a decimal number. Type 0 to exit:  '));
    if (userInput == 0) {
        break;
    }   
    numbers.push(userInput);
}

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

let average = sum / numbers.length;


console.log(`The average of the numbers typed is: ${average}`)
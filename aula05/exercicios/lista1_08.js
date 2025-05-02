/** 
 * 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
const input = require('prompt-sync')();

let number1 = Number(input('Type the first number: '));
let number2 = Number(input('Type the second number: '));

let bigger = number1;

if (number2 > number1) {
    bigger = number2;
}

console.log(`The bigger is ${bigger}`);
/**
 * 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
 */
const input = require('prompt-sync')();
let numbers = []

for (let i = 0; i <= 4; i++) {
    numbers.push(Number(input('Type a number: ')));
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(`The sum of the numbers typed: ${sum}`);

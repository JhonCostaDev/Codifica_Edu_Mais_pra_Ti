/**
 * 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
 */
const input = require("prompt-sync")();
let repeat;
const numbers = [];
do {
    let number = Number(input('Type a number:  '));
    numbers.push(number);
    repeat = input('Do you want to insert another number, (Y) - (N)     ').toLowerCase();

} while(repeat != 'n');

//a) O somatório entre todos os valores;
const sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);

// b) Qual foi o menor valor digitado;
let smallest = 0;
countEven = 0;
for(let i = 0; i <= numbers.length; i ++) {
    if(numbers[i] < smallest) smallest = numbers[i]; 
    if(numbers[i] % 2 == 0) countEven ++;
}

// c) A média entre todos os valores;
let average = sumNumbers / numbers.length;

// d) Quantos valores são pares.
// countEven

console.log("=======================================");
console.log(`The sum of numbers typed: ${sumNumbers}`);
console.log(`The smallest number typed: ${smallest}`);
console.log(`The average of numbers typed: ${average}`);
console.log(`How many numbers are even: ${countEven}`);
console.log("=======================================");
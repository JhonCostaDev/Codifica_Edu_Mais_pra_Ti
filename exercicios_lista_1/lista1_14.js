/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
5! = 5 x 4 x 3 x 2 x 1 = 120
*/
const input = require('prompt-sync')();
let num = Number(input("Type a number to calculate its fatorial:  "));
let fat = num;
let count = num;    
for (let i = 1; i < count; i ++) {
    num --;
    fat = fat * num;
}

console.log(`The fatorial of ${count} is: ${fat}!`);
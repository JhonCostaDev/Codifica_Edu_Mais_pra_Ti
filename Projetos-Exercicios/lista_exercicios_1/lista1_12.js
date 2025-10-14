/**
 * 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
 */

const input = require('prompt-sync')();

let user_input = Number(input('Type a number to show the Math table of this number: '));

for(let i = 0; i < 10; i++) {
    console.log(`${user_input} x ${i + 1} = ${user_input * (i + 1)}`);

}

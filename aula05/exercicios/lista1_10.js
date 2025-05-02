/**
 * 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */

const input = require('prompt-sync')();

user_entry = Number(input('Type a number: '));

for (let i = user_entry; i > 0; i--) {
    console.log(user_entry);
}
/**
 * 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
 */

const input = require('prompt-sync')();

user_amount = Number(input('Type the Amount: '));

let apple = 0.3;

if (user_amount >= 12) {
    apple = 0.25;
}


console.log(`The total is ${user_amount * apple}`);

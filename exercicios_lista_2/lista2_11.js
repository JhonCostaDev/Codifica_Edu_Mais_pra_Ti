/**11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const input = require("prompt-sync")();

const aP = []; //Arithmetic progression (AP)

let firstTerm = Number(input("Type the first term:  "));
let commonDifference = Number(input("Type the common difference:  ")); //common difference

for(let i = 0; i <= 10; i++){
    console.log(firstTerm);
    firstTerm += commonDifference;
}
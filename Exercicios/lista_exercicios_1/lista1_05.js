/**
 * 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.

MC	Classificação
Menor que 18,5	Magreza
18,5 a 24,9	Normal
25 a 29,9	Sobrepeso
30 a 34,9	Obesidade grau I
35 a 39,9	Obesidade grau II
Maior que 40	Obesidade grau III
IMC = peso (kg) / altura² (m):
 */
const input = require('prompt-sync')();
let imc = (peso, altura) => peso / altura ** 2;

let peso = Number(input('Digite seu peso: '));
let altura = Number(input('Digite sua altura: '));
let user_imc = imc(peso, altura);

if (user_imc < 18.5) {
    console.log(`Seu IMC é de: ${user_imc}`)
    console.log('Magreza');
} else if(user_imc < 25) {
    console.log(`Seu IMC é de: ${user_imc}`)
    console.log('Normal');
} else if(user_imc < 30) {
    console.log(`Seu IMC é de: ${user_imc}`)
    console.log('Sobrepeso');
} else if(user_imc < 35) {
    console.log(`Seu IMC é de: ${user_imc}`)
    console.log('Obesidade grau I');
} else if(user_imc < 40) {
    console.log(`Seu IMC é de: ${user_imc}`)
    console.log('Obesidade grau II');
} else  {
    console.log(`Seu IMC é de: ${user_imc}`)
    console.log('Obesidade grau III');
}

//console.log(imc(100, 1.79));



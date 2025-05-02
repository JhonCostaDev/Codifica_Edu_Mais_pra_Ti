//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const input = require('prompt-sync')();

user_input = input("Type a number: ");

if (user_input % 2 == 0) {
    console.log('This number is even');
} else {
    console.log('This number is odd');
}
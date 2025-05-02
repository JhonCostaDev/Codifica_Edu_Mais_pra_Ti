// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const input = require('prompt-sync')();

let user_input = Number(input('Type how old are you: '));

if(user_input <= 12) {
    console.log('You are a child');
} else if(user_input <= 17) {
    console.log('You are a teenage');
} else if(user_input <= 65) {
    console.log('You are an adult');
} else {
    console.log('You are an elderly')
}

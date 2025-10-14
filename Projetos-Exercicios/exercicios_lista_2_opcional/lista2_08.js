/**
 * 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
 */

const input = require("prompt-sync")();
const rate = 0.05;
let totalExerciseTime = Number(input('How many time have you exercise at this month?   '));
let score = 0;
if (totalExerciseTime <= 10) {
    score = totalExerciseTime * 2;
} else if(totalExerciseTime <= 20) {
    score = totalExerciseTime * 5;
} else {
    score = totalExerciseTime * 10;
}

let balance = score * rate;
console.log(`You earned Us$ ${balance}. `);
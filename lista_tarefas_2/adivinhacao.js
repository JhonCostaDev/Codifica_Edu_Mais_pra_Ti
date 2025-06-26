/**
 * Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
 */
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

const input = require('prompt-sync')();

//user_input = input("Type a number: ");

while (!acertou) {
  const palpite = parseInt(input("Adivinhe o número entre 1 e 100:"));
  tentativas++;

  if (palpite === numeroSecreto) {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
    acertou = true;
  } else if (palpite < numeroSecreto) {
    console.log("Mais alto!");
  } else if (palpite > numeroSecreto) {
    console.log("Mais baixo!");
  } else {
    console.log("Por favor, insira um número válido.");
  }
}

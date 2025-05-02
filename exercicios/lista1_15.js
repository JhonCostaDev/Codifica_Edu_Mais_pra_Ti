/**
 * 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
1, 1, 2, 3, 5, 8, 13, 21, 34, 55.
 */

let fiboonacci = [];

for (let i = 0; i < 11; i++) {
    if (fiboonacci.length < 2){
        fiboonacci.push(i);
    } else{
        fiboonacci.push(fiboonacci[i - 1] + fiboonacci[i - 2]);
    }
}

console.table(fiboonacci)
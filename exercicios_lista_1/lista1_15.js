/**
 * 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
1, 1, 2, 3, 5, 8, 13, 21, 34, 55.
 */

let fibonacci = [];

for (let i = 0; i < 11; i++) {
    if (fibonacci.length < 2){
        fibonacci.push(i);
    } else{
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
}

console.table(fibonacci);
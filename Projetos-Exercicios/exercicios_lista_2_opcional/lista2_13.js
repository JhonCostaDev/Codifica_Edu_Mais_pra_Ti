/**13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */

function fibonacciRecursive(n){
    if(n <= 0){
        return 0;
    } else if(n == 1) {
        return 1;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

const listFibonacci = [];

for (let i = 1; i <= 15; i++) {
    listFibonacci.push(fibonacciRecursive(i));
}

console.table(listFibonacci);
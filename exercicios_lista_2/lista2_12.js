/**12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

function fibonacciRecursive(n){
    if(n <= 0){
        return 0;
    } else if(n == 1) {
        return 1;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

let fibonacci = [];

for (let i = 0; i < 11; i++) {
    if (fibonacci.length < 2){
        fibonacci.push(i);
    } else{
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
}

console.log(fibonacciRecursive(10));

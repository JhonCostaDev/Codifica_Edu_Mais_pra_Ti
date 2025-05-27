/**15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

const input = require("prompt-sync")();

const numbers = [];

for(let i = 0; i < 10; i++) {
    number = Number(input("Type a number:  "));
    numbers.push(number);
}
console.log("============== Even numbers ==============");
for(let i = 0; i <= numbers.length; i++){
    if(numbers[i] % 2 == 0) {
        console.log(`Item: ${numbers[i]} Index: ${i}`);
    }
}

console.log("============== Even numbers ==============");
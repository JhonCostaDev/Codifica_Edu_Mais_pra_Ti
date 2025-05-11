/**16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

const numbers = [];

for(let i = 0; i <20; i++) {//Crie um array chamado números contando 10 valores numéricos à sua escolha.
    numbers.push(Math.floor(Math.random() * 100));
}
console.log("Array Original:");
console.table(numbers);

numbers.sort((a, b) => a - b); // ordenando com o metodo sort

console.table(numbers);

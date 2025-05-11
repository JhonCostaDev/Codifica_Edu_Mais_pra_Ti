/**
 * Crie um array chamado números contando 10 valores numéricos à sua escolha.
 * Use métodos de array para calcular:
 *  1. A soma de todos os elementos
 *  2. A média dos elementos.
 *  3. Gere um novo array chamado pares que contenha apenas os números pares de números.
 *  
 * 
 *  Imprima no console:
 *  1. O array original
 *  2. A soma
 *  3. A média
 *  4. O array pares.
 */
function evenArray(arrayNumbers) {
    evens = []
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % 2 == 0) {
            evens.push(arrayNumbers[i]);
    }
    }
    return evens;
}

const numbers = [];

for(let i = 0; i <10; i++) {//Crie um array chamado números contando 10 valores numéricos à sua escolha.
    numbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array Original:")
console.table(numbers)
// Somando os itens do array
let sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Soma: ${sumNumbers}`);

let average = sumNumbers / numbers.length;
console.log(`Media: ${average}`);

const evenNumbers = numbers.filter(num => num % 2 == 0);//evenArray(numbers);
console.table(evenNumbers);
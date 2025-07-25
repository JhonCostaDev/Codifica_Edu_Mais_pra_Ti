// Crie um array com 10 números e o ordene em ordem crescente

const numbers = [];

for(let i = 0; i <10; i++) {//Crie um array chamado números contando 10 valores numéricos à sua escolha.
    numbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array Original:")
console.table(numbers);
let n = numbers.length;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i; j++){
        if (numbers[j] > numbers[j + 1]){
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp; 
        }
    }
}

console.table(numbers);
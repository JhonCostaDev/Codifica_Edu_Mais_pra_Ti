
let matriz = [];

for(let i = 0; i < 3; i++) {
    matriz[i] = [];
    for(let j = 0; j < 3; j++){
        matriz[i][j] = 10;
    }

}

console.table(matriz);
console.log(matriz);
// calcular a diagonal da matriz;
let sum = 0;
for (index in matriz){
    console.log(matriz[index][index]);
    sum += matriz[index][index]
}
console.log(sum);
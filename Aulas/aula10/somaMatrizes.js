//Fazer a soma de duas matrizes

const matriz1 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

const matriz2 = [
    [1.1, 2.2, 3.3],
    [4.4, 5.5, 6.6],
    [7.7, 8.8, 9.9]
];

function sumTwoMatrices(matrix1, matrix2){
    const newMatrix = [];
    for(let i = 0; i < matrix1.length; i++) {
        let lenInternalMatrix = matrix1[i].length;
        const internalMatrix = [];
        for (let j = 0; j < lenInternalMatrix; j++){
            let soma = matrix1[i][j] + matrix2[i][j];
            internalMatrix.push(soma);
        }
        newMatrix.push(internalMatrix);
    }
    return newMatrix;
}

//console.log(matriz1);
console.log(sumTwoMatrices(matriz1, matriz2));

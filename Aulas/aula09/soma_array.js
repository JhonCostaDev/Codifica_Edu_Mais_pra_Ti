//Criar uma função que soma os elementos de um array e retorna esse valor

function sumArray(arrayList){
    let sum = 0;
    for(index in arrayList){
        sum += arrayList[index];
    }
    return sum;
}

//Usando reduce
function sumReduce(arrayList){
    return numbers.reduce((acc, item) => acc + item, 0);
}


let numbers = [23, 35, 29, 41, 18, 27, 32, 45, 21, 38];

let result = sumArray(numbers);
console.log(result)
console.log(sumReduce(numbers));
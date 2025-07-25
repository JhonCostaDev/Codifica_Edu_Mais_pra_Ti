//Crie uma função que retorna o maior valor

function biggestOne(arr){
    let biggest = 0;
    for(index in arr){
        
        if(arr[index] > biggest){
            biggest = arr[index]
        }
    }
    return biggest;
}

let numbers = [23, 35, 29, 41, 18, 27, 32, 45, 21, 38];
let result = biggestOne(numbers);
console.log(result);
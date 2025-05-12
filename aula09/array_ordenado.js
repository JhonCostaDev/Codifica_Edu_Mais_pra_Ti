/**Faça uma função que retorna um array ordenado */


function bubleeSort(array) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i; j++) {
            let temp;
            if (array[j]>array[j+1]){
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

let numbers = [6, 2, 1, 3, 5, 4];
let ages = [23, 35, 29, 41, 18, 27, 32, 45, 21, 38];
console.log(ages);

console.log(bubleeSort(ages));
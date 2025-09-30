const averageTemp = []

averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 27.5;
averageTemp[4] = 52.0;
averageTemp[5] = 60.9;


//console.table(averageTemp);

let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// for(let i = 0; i < daysOfWeek.length; i++) {
//     console.log(daysOfWeek[i]);
// }




//Create a function that inserts an item at the last position of an array."

function addLastPosition(item, arr) {
    let lastPosition = arr.length;
    arr[lastPosition] = item;
    return arr;
}

const fruits = ['apple', 'grape'];
console.log(fruits);

let newFruits = addLastPosition('orange', fruits);
console.log(newFruits);

// Add at last position of an array using a Push method
const numbers = [];

numbers.push(11);
numbers.push(12, 13);

console.log(numbers)



// Create a function to add at the first position of an array

function addFirstPosition(item, arr) {
    

    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = item;
    return arr;
}

let letters = ['b', 'c', 'd', 'e'];

console.log(letters);

let newLetters = addFirstPosition('a', letters);
console.log(newLetters);

// add at first position using the Unshift method.


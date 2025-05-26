//Code a for loop that runs through all numbers from 0-99 and append all numbers divisible by seven into a string. Return this string.

function easyLoop() {
    let dividedBy7 = '';

    for(let i = 0; i < 100; i++) {
        if (i%7 == 0){
            dividedBy7 += i;
        }
    }

    return dividedBy7;   
}

console.log(easyLoop())
//Construa uma função que calcule o fatorial de um número

function calculateFatorial(num) {
    let fat = 1;
    for(let i = 1; i <= num; i++) {
        fat *= i;
    }
    return fat;
}

function calculateFatorial2(num) {
    for(let i = num; i > 1; i--){
        num *= i - 1;
    }
    return num;
}

console.log(calculateFatorial(6));
console.log(calculateFatorial2(5));



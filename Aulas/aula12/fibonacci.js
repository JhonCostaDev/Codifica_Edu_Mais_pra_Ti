//Imprima os 10 primeiros numeors da sequência de fibonacci

function fibonacci(quantidade) {
    let fibo = [];
    
    for(let i = 0; i <= quantidade; i++) {
        if(fibo.length < 2){
            fibo.push(i);
        } else {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
        }
    }
    return fibo;
}

console.table(fibonacci(100));
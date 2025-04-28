const input = require('prompt-sync')();

tabuada = Number(input("Qual tabuada mostrar?\n"));


let i = 1;
while(i <= 10){
    console.log(`${tabuada} x ${i} = ${tabuada * i} `);
    i++;
}


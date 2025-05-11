/**14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */
const input = require("prompt-sync")();
const names = [];

for(let i = 0; i < 7; i++){
    let name = input('Type a name:   ');
    names.push(name);
}

for(let j = names.length - 1; j >= 0; j--){
    console.log(names[j]);
}

//console.log(names.length)
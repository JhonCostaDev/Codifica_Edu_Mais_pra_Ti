//programa que retorna a media das notas digitadas
const input = require("prompt-sync")();
let notas = [];

while (true) {
    let nota = Number(input("Digite a nota:  "));
    pergunta = input('Deseja adicionar outra nota? (Y / N):  ');
    notas.push(nota);
    if (pergunta == 'n') {
        break;
    }
}

let numeroNotas = notas.length
let soma = 0;
for(const nota of notas) {
    soma += nota;
}
media = soma / numeroNotas;
console.log(`A média das notas digitadas é de: ${media}`)
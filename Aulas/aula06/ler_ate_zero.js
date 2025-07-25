/**
 * Faça um algoritmo para repetir a leitura de números até o valor digitado for diferente de 0(zero). Para cada numero forneciso, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for digitado a repetição deve ser encerrada sem imprimir mensagem alguma

 */

const input = require("prompt-sync")();

function getUserInput(string){
    let temp =Number(input(string));
    try{
        if(temp == "") {
            throw "is Empty";
        }  else if(isNaN(temp)) {
            throw "not a number";
        }else return temp;
    } catch(err) {
        console.error('Erro: Input', err)
        return NaN;
    }
}


while (true) {
    number = Number(input('Type a number:  '));
    if(number != 0){
        if(number % 2 == 0){
            console.log(`${number} is Even!`);
        }else {
            console.log(`${number} is Odd!`);
        }
    } else {
        break;
    }
}

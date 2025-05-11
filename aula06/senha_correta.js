// Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada, escreveer a mensagem "Senha inválida". Quando a senha for informada correamente, deve esr impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807. 

const input = require("prompt-sync")();
const passWord = '2807';

while(true) {
    let userPassWord = input("Enter Password: ");

    if (userPassWord == passWord) {
        console.log('ACESSO PERMITIDO');
        break;
    }
    console.log('Senha inválida');
}
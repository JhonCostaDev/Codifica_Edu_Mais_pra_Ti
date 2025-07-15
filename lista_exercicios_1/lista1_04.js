/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/
const input = require('prompt-sync')();

console.log('Type: 1 - to say hi');
console.log('Type: 2 - to say hey');
console.log('Type: 3 - to say ho');;
let user_input = input('Choose the option.');

switch (user_input) {
    case '1':
        console.log('Hi');
        break;
    case '2':
        console.log('Hey');
        break;
    case '3':
        console.log('Ho');
        break;

    default:
        console.log('Invalid Option!');
}
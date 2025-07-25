// calculadora para operações básicas com dois números.


// Pedir a entrada do usurio
const input = require("prompt-sync")();

console.log("Calculadora básica");

console.log(`
    Digite:
    1 - Somar
    2 - Subtrair
    3 - Multiplicar
    4 - Dividir
    0 - Sair
    `)
operacao = Number(input('Escolha uma operacao:  '));
numero1 = Number(input("Digite o primeiro número:  "));
numero2 = Number(input("Digite o segundo número:  "));


switch (operacao) {
    case 1: 
        console.log(numero1 + numero2);
        break;
    case 2: 
        console.log(numero1 - numero2);
        break;
    case 3: 
        console.log(numero1 * numero2);
        break;
    case 4: 
        if (numero2 ==  0) {
            console.log("Error zero division");
        }
        console.log(numero1 / numero2);
        break;
    case 0: 
    
        break;
    default:
        console.log("Operação inválida!");

}


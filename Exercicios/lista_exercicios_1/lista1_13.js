/**
 * 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
 */
const input = require('prompt-sync')();

let numbers = [];

function isDecimal(value){
    return /^-?\d+\.\d+$/.test(value.toString());
    
}

while (true){
    try{
        userInput = Number(input('Please enter a decimal number. Type 0 to exit:  '));
        if (userInput == 0) {
            break;
        }   
        let decimal = isDecimal(userInput);
        if(!decimal) {
            throw new Error("It is not a Decimal number!!!");
            
        } else {

            numbers.push(userInput);
        }
    } catch (erro) {
        console.log(erro.message);
    }
}
if(numbers.length > 0){
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    
    let average = sum / numbers.length;
    console.log(`The average of the numbers typed is: ${average}`)

}

//console.log(isDecimal(2.190))
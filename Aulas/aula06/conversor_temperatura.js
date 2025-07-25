//Escreva um algoritmo que leia uma temperatura em graus Celcius e devolva em Fahrenheit
//fahrenheit = (celsius * 9/5) +32
const input = require("prompt-sync")();

function getUserInput(){
    let temp =Number(input('Enter the Celcius\'s temperature:  '));
    try{
        if(temp == "") {
            throw "is Empty";
        }  else if(isNaN(temp)) {
            throw "not a number";
        }else return temp;
    } catch(err) {
        console.error('Erro: Input', err)
        return false;
    }
}
const calcCelciusToFahrenheit = (temperature) => (temperature * 9/5) + 32;


let celsius= getUserInput();
if (celsius != false) {
    let fahrenheit = calcCelciusToFahrenheit(celsius);
    console.log(`${celsius}º Celcius is equal to ${fahrenheit}º fahrenheit.`);
} else {
    console.log('Unable to calculate');
}

//
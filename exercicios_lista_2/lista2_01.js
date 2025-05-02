/**
 * 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
1 - 10min

 */

const input = require('prompt-sync')();

function calcLifeLost(numberOfCigarettes, yearsSmoking) {
    minutsLost = 10; //minutes
    lifeLostYear = (numberOfCigarettes * minutsLost) * 365;//minutes
    lifeLostTotal = lifeLostYear * yearsSmoking;
    return lifeLostTotal;
}

const convertMinutesToDays = (numberOfMinutes) => numberOfMinutes / 1440;

let  cigarettesDay= Number(input('How many cigarettes do you smoke a day? '));
let yearsSmoking = Number(input('How many years have you been smoking?'));

let lifeLostMinutes = calcLifeLost(cigarettesDay, yearsSmoking); 

let lifeLostDays = convertMinutesToDays(lifeLostMinutes)

console.log(`Smoking ${cigarettesDay} cigarettes a day, you have already lost ${lifeLostMinutes} minutes of your life or ${lifeLostDays.toFixed(2)} days of your life!!!`);
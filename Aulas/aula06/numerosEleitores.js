//Escreva um algoritmo para ler o número de eleitores de um municipio, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const input = require("prompt-sync")();

function getUserInput(string){
    let temp =Number(input(`Enter the number of ${string} votes:  `));
    try{
        if(temp == "") {
            throw "is Empty";
        }  else if(isNaN(temp)) {
            throw "not a number";
        }else return temp;
    } catch(err) {
        console.error('Erro: Input', err)
        return false
    }
}

function calculateVotePercentage(quantValid, quantBlank, quantNull) {
    let totaVOtes = quantValid + quantBlank + quantNull;
    let percentValid = (quantValid / totaVOtes) * 100;
    let percentBlank = (quantBlank / totaVOtes) * 100;
    let percentNull = (quantNull / totaVOtes) * 100;
    console.log("===================================");
    console.log("============= SUMARY ==============");
    console.log("===================================");
    console.log(`Total Votes: ${totaVOtes} votes`);
    console.log(`Valid Votes: ${percentValid.toFixed(2)}% votes`);
    console.log(`Blank Votes: ${percentBlank.toFixed(2)}% votes`);
    console.log(`Null Votes: ${percentNull.toFixed(2)}% votes`);
    console.log("===================================");
}

// Votos validos
let validVotes = getUserInput('Valid');
// Votos em branco
let blankVotes = getUserInput('Blank');
// Votos nulos
let nullVotes = getUserInput('Null');

if (validVotes && blankVotes && nullVotes){
    calculateVotePercentage(validVotes, blankVotes, nullVotes);
} else {
    console.log('Unable to calculate');
}
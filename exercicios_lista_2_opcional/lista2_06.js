/**6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */
const input = require('prompt-sync')();
//This arrow function generates a random number from 1 to 3.
const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;


let sorted_number =getRandomNumber();
console.log("Guessing Game");
console.log("I'm thinking of a number between 1 and 5, inclusive. Can you guess which one?");
console.log('You have three attemps!');
let attemps = 3;
while(attemps > 0){
    let user = Number(input('Type your  guess:  '));

    if (user == sorted_number) {
        console.log("Congratulations, You Win!");
        break;
    } else{
        console.log("Wrong guess.");
        if (user < sorted_number) {
            console.log("The number is higher");
        }else {
            console.log("The number is Lower.")
        }
    }

    
    attemps --;
}
console.log(sorted_number);
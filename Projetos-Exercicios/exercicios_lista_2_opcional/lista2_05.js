//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
const input = require('prompt-sync')();


//This arrow function generates a random number from 1 to 3.
const getRandomNumber = () => Math.floor(Math.random() * 3) + 1;

console.log('The Rock Paper Scissors\' Game.');
user_score = 0; // User score
compute_score = 0; //compute score

const rockPaperScissors = {//This object is to store the name of the options.
    1: "Rock",
    2: "Paper",
    3: "Scissors"
}

// This loop while controls the flow of the game.
while(true) {
    console.log('Choose a number from 1 to 3 to start the game!');
    console.log('[1] - Rock, [2] - Paper, [3] - Scissors [0] - Exit'); //show the options.
    let user = Number(input("Type your choice: "));
    let compute = getRandomNumber();

    if (user == 0) {
        break;
    } else if (user == compute) {
        console.log(`You (${rockPaperScissors[user]}) VS. Compute (${rockPaperScissors[compute]})`);
        console.log('Draw!!!')
    } else if(user == 1) {
        console.log(`You (${rockPaperScissors[user]}) VS. Compute (${rockPaperScissors[compute]})`);
        if (compute == 2) {
            console.log('Compute wins');
            compute_score ++;
        } else{
            console.log('You win!');
            user_score ++;
        }
    } else if(user == 2) {
        console.log(`You (${rockPaperScissors[user]}) VS. Compute (${rockPaperScissors[compute]})`);
        if (compute == 3) {
            console.log('Compute wins');
            compute_score ++;
        } else{
            console.log('You win!');
            user_score ++;
        }
    } else if(user == 3) {
        console.log(`You (${rockPaperScissors[user]}) VS. Compute (${rockPaperScissors[compute]})`);
        if (compute == 1) {
            console.log('Compute wins');
            compute_score ++;
        } else{
            console.log('You win!');
            user_score ++;
        }
    } else {
        console.log('Invalid option!');
    }

}
console.log('End the game!!!');
console.log(`Score: You: ${user_score} | Compute: ${compute_score}`);



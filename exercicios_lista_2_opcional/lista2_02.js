/**
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
 */
const input = require('prompt-sync')();

function calcTrafficTicket(velocity) {
    let ratePerKm = 5;
    let limit = 80;
    let speeding = velocity - limit;
    let rate = 0;
    if (velocity >= limit) {
        rate = speeding * ratePerKm;
    }
    return rate
}

let speed = Number(input('Enter the vehicle\'speed:   '));

let checkSpeed = calcTrafficTicket(speed);

if (checkSpeed != 0) {
    console.log(`You were fined for speeding in Us$ ${checkSpeed}!`);
} else {
    console.log('No traffic violation recorded!');
}
/**
 * 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
 */

const input = require('prompt-sync')();

const calculateFare = (distanceKm) => {
    let fare = 0.5;
    if (distanceKm > 200) {
        fare = 0.45;
    }
    return distanceKm * fare;
};

let distance = Number(input('What distance (Kilometers) do you want to cover?  '));

let ticket = calculateFare(distance);

console.log(`The Total is Us$ ${ticket}.`);
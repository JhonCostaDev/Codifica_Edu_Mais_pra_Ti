/**7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. 

Faça um programa que leia:
    * O tipo de carro alugado (popular ou luxo), 
    * Quantos dias de aluguel e 
    * Quantos Km foram percorridos. 
    * 
No final, mostre o preço a ser pago de acordo com os dados a seguir:

    * Carros populares:
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
    * Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */
const input = require("prompt-sync")();

function getUserInput(string){
    let temp =Number(input(string));
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

function calculateDeluxePrice(days, kilometers){
    const deluxeCar = 150;
    const below200Km = 0.2;
    const above200Km = 0.1;
    let valueKm = 0;
    let valueRent = deluxeCar * days;

    if (kilometers <= 200) {
        valueKm = kilometers * below200Km;
    } else {
        valueKm = kilometers * above200Km;
    }
    let total = valueRent + valueKm;
    return total;

}

function calculatePopularPrice(days, kilometers){
    const popularCar = 90;
    const below100Km = 0.3;
    const above100Km = 0.25;
    let valueRent = popularCar * days;
    let valueKm = 0;
    if (kilometers <= 100) {
        valueKm = kilometers * below100Km;
    } else {
        valueKm = kilometers * above100Km;
    }
    let total = valueRent + valueKm;
    return total; 
}
console.log("Which car do you want to rent?");
while (true){

    let typeRent = input("Popular, Deluxe or exit to quit:  ").toLowerCase().replace(/\s/g, "");
    if (typeRent == 'popular' || typeRent == 'deluxe'){
        let dayRents = getUserInput("How many days of rent?  ");
        let totalKilometers = getUserInput("How many kilometers traveled?  ");
        let price;
        if (typeRent == 'popular') {
            price = calculatePopularPrice(dayRents, totalKilometers);
        } else{
            price = calculateDeluxePrice(dayRents, totalKilometers);
        }            
        console.log(`The rent price is Us$ ${price}`);
        console.log("");
        
    }else if (typeRent == 'exit'){
        break;
    }else {
        console.log('Type Invalid');
    }
}





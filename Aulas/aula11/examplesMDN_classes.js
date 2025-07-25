class Car {
    constructor(brand, model, manufacture, color, power) {
        this.brand = brand;
        this.model = model;
        this.manufacture = manufacture;
        this.color = color;
        this.power = power;
    }
}

let fusca = new Car('VolksWagen', 'Fusca', '1978', 'white', '180cv');
let chevette = new Car('Chevrolet', 'Chevette', '1986', 'Brown', '290cv');
let corcel = new Car('Ford', 'Corcel', '1978', 'black', '400cv');
let centoEquaretaEsete = new Car('FIAT', '147', '1981', 'gray', '289cv');

let garage = [fusca, chevette, corcel, centoEquaretaEsete];

console.clear();
console.log(garage);
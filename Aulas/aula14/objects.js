

let car = {
    name: 'McQueen',
    color: "Red"
}

let car2 = {
    name: 'Sally',
    color: "Blue"
}

//console.log(car.name)

class ExampleCar {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

let car3 = new ExampleCar('BubleBee', 'Yellow');

console.log(car3.name)



let car = new Object(); //empty

// adding properties to an object
car.brand = 'BYD';
car.model = 'Dolphi';
car.manufacture = 2025;
car.chassiNumber = 'HS3890287598BR';



console.log(car);

//
console.log(car.brand);
console.log(car['brand']);
console.log(car.model);
car['model'] = 'Yuan';
console.log(car);

console.log('=================================');

let myObj = new Object();

let str = 'string qualquer';
let aleat = Math.random();
let obj = new Object();
obj.id = 1234;

myObj.type = 'sintaxe de ponto';
myObj['Data de criacao'] = '2025/05/25';
myObj[str] = 'valor da string';
myObj['objeto'] = obj.id;

console.log(myObj);


console.log('=================================');

// Inicializadores de objetos

let myMotorCycle = {
    brand: 'Honda',
    model: 'Falcon',
    color: 'Black',
    engine: {id: 'IDS909234098209EU', cilinders: 400, qtOil: 2, gears: 5}
} 

console.log(myMotorCycle); // all object
console.log(myMotorCycle.engine) // object engine

console.clear()

console.log('=================================');
for(let value of Object.keys(myMotorCycle.engine)){
    console.log(value);
}

console.log('=================================');


// Objetos com função construtora

function Car(brand, model, manufacture, color, power) {
    this.brand = brand;
    this.model = model;
    this.manufacture = manufacture;
    this.color = color;
    this.power = power;
}

let gol = new Car('VolksWagen', 'Gol', 1998,'red', '450cv');
let celta = new Car('Chevrolet', 'Celta', 2001, 'Blue', '400cv');
let byd = new Car('BYD', 'Dophin', 2025, 'white', '425cv');
let hb20 = new Car('Hyunday', 'Hb20', 2022, 'gray', '398cv');

let garage = [];
garage.push(gol)
garage.push(celta)
garage.push(byd)
garage.push(hb20)

console.clear();
console.log(garage[1].model);


// Criando objetos com Object.create




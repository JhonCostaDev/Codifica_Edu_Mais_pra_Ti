let cars = {
    chevrolet : {
        model: 'celta',
        manufacture: 2001,
        color: 'white',
        doors: 2
    },
    volkswagen : {
        model: 'gol',
        manufacture: 1998,
        color: 'red',
        doors: 4
    },
    ford : {
        model: 'ka',
        manufacture: 2010,
        color: 'green',
        doors: 2
    }
}
delete cars.ford.color;
console.log(cars);

cars.ford.color = 'white';
console.log(cars);

cars.volkswagen.engine = ['210cv', '16v', 1.8]
console.log(cars);

cars.volkswagen.engine.push('2L oil');
console.log(cars);

cars.chevrolet.model = 'corsa';
console.log(cars);
class Animal {
    constructor(name) {
        this.name = name;
        console.log("Animal foi instanciado");
    }

    falar() {
        console.log(`${this.name} faz barulho.`)
    }
}

class Cachorro extends Animal {
    constructor(name, race) {
        super(nome);
        this.race = race;
        console.log("Cachorro criado");
    }

    falar() {
        console.log(`${this.name} faz au au`);
    }
}
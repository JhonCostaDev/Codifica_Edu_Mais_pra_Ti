let book = {
    name :'Marley e Eu',
    anoLancamento: '2024',
    autor: 'Will Smith',
    genero: 'comedia',
    atores: ['Scoob', 'Super cão', 'Batcão'],

    mostrarCaracteristicas: function() {
        return `${this.name} é um livro para ficar alegre.`
    }
}

livro = book;
livro.preco = 20.2;


// console.log(book.mostrarCaracteristicas())
// console.log(book)
// console.log(livro)

let filme = {
    titulo: 'High School Musical',
    anoLancamento: 2007,
    atores: ['Zac Efrom', 'Arthur Morgan', 'Cloud Strife'],
    genero: 'guerra',

    exibirCaracteristicas: function() {
        return `${this.titulo} é um filme de drama.`
    }
}


// Construtor de objetos

function Anime(nome, personagem, nota) {
    return {
        nome,
        personagem,
        nota
    }
}

let anime1 = Anime('Naruto', 'Naruto', 8.8);
let anime2 = Anime("Avatar", 'Aang', 10);

//console.log(anime1);


//FOR IN

let animals = ['mouse', 'dog', 'cat', 'pig', 'duck', 'deer']
console.log('for in');
for(key in animals) {
    //console.log(animals[key])
}


//FOR OF
console.log('for of');
for(let animal of animals) {
    //console.log(animal)
}

for(value in anime2) {
    //console.log(anime2[value]);
}

for(let value of Object.keys(anime1)){
    console.log(value)
}
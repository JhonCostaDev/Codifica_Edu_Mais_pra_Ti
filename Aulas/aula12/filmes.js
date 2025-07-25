const filmes = [
    {
        titulo: 'Sempre so seu lado',
        genero: 'De chorar'
    },
    {
        titulo: 'O Massacre da Serra Elétrica',
        genero: 'Terror'
    },
    {
        titulo: 'Minha Mãe é uma Peça',
        genero: 'Comédia'
    },
    {
        titulo: 'Tarzan',
        genero: 'Aventura'
    },
    {
        titulo: 'Como eu Era Antes de Você',
        genero: 'De chorar'
    },
    {
        titulo: 'O Jogo da Imitação',
        genero: 'Histórico'
    },
    {
        titulo: 'Top Gun',
        genero: 'Guerra'
    },
    {
        titulo: 'Your Name',
        genero: 'Romance'
    },
    {
        titulo: 'DeadPool',
        genero: 'Herói'
    },
    {
        titulo: 'Batman Forever',
        genero: 'Herói'
    }
]

// Listar a contagem de generos desse array
let listGeneros = [];
let count = {};

for(let filme of Object.values(filmes)){
    listGeneros.push(filme.genero);
}

for (let gen of listGeneros) {
    count[gen] = (count[gen] || 0) + 1;
}

console.table(count);
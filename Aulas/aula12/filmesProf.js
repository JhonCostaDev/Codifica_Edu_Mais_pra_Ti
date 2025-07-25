const filmes = [
    {titulo: 'Sempre so seu lado',genero: 'De chorar'},
    {titulo: 'O Massacre da Serra Elétrica',genero: 'Terror'},
    {titulo: 'Minha Mãe é uma Peça',genero: 'Comédia'},
    {titulo: 'Tarzan',genero: 'Aventura'},
    {titulo: 'Como eu Era Antes de Você',genero: 'De chorar'},
    {titulo: 'O Jogo da Imitação',genero: 'Histórico'},
    {titulo: 'Top Gun',genero: 'Guerra'},
    {titulo: 'Your Name',genero: 'Romance'},
    {titulo: 'DeadPool',genero: 'Herói'},
    {titulo: 'Batman Forever',genero: 'Herói' }
]

let contaFilmes = {};

filmes.forEach((filme) => {
    if(contaFilmes[filme.genero]) {
        contaFilmes[filme.genero]++;
    } else {
        contaFilmes[filme.genero] = 1;
    }
})

//console.table(contaFilmes);


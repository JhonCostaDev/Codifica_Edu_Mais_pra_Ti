//Use for of para iterar e verificar os livros publicados antes do ano 2000.
const livraria = [
    {
        titulo: '1984',
        autor : 'George Orwell',
        ano: 1984
    },
    {
        titulo: 'O Profeta',
        autor : 'Endrew Berthold',
        ano: 2001
    },
    {
        titulo: 'Código Limpo',
        autor : 'Martin',
        ano: 2010
    },
    {
        titulo: 'O Velho e o Mar',
        autor : 'Hemmingway',
        ano: 2010
    },
    {
        titulo: 'O Principe',
        autor : 'Maquiável',
        ano: 2002
    }
];

for(let livro of Object.values(livraria)){
    if(livro.ano < 2000){
        console.log(livro);
    }

}
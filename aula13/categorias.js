let categorias = [
    {
        id: 1,
        nome: 'Eletrônicos',
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id: 4, nome: "Tablets", filhos: []}
            ]}
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos: []
    }
]

function showCatogorias(lista, nivel=0) {
    for(let categoria of lista) {
        console.log(" ".repeat(nivel * 2) + categoria.nome);
        if(categoria.filhos.length > 0) {
            showCatogorias(categoria.filhos, nivel + 1)
        }
    }
}
console.log(showCatogorias(categorias))
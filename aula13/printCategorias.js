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

function printCategorias (listObj) {
    for(obj of listObj){
        console.log(obj);
    }
}

printCategorias(categorias);
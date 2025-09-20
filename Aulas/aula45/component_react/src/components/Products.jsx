import produtos from '../data/produtos.json'
{/**Criar um componente que exiba as informações de um produto.
    O Componente Pai(App) vai passar os dados do produto
    (Nome, Preço, Deescrição) Como props para o componente filho(Produto), e o componente filho vai exibir essas informações */}

const estoque = ;

function App(props) {
    return (
        <div>
            <ul>
                <li>{props.nome} R$: {props.preco}</li>
            </ul>
        </div>
    )
}

function Products() {
     return (
        <div>
            <App nome="Xbox" preco={1399}/>
            <App nome="Playstation" preco={2359}/>
        </div>
     )
     
}


export default Products;
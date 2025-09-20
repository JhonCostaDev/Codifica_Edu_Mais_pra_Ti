{/**Criar um componente que exiba as informações de um produto.
    O Componente Pai(App) vai passar os dados do produto
    (Nome, Preço, Deescrição) Como props para o componente filho(Produto), e o componente filho vai exibir essas informações */}
export default function Products({ props }) {

    return (
        <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço (R$)</th>
          </tr>
        </thead>
        <tbody>
          {props.map((item, index) =>(
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
              <td>{item.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}
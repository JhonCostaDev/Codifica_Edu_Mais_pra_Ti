import { useState, useEffect } from "react";

function Products () {
    // Capturar os dados do formulário
    const [formData, setFormData] =  useState({
        produto: '',
        preco: '',
        categoria: '',
        descricao: ''
    })

    //const [cadastro, setCadastro] = useState([]);
    // Carrega os dados salvos no localStorage ao iniciar
  const [cadastro, setCadastro] = useState(() => {
    const dadosSalvos = localStorage.getItem('cadastro');
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  // Salva os dados no localStorage sempre que cadastro mudar
  useEffect(() => {
    localStorage.setItem('cadastro', JSON.stringify(cadastro));
  }, [cadastro]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => (
            {...prev, [name]: value}
        ));
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        // adiciona o novo cadastro
        setCadastro((prev) => [...prev, formData]);
        
        //Limpar formulario
        setFormData({
        produto: '',
        preco: '',
        categoria: '',
        descricao: ''
    })
        

    }

    


    return (
        <>
            <h2>Cadastro de Produtos</h2>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Produto:</label>
                        <input type="text" className="input" name="produto" value={formData.produto} onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="">Preço</label>
                        <input type="number" step="any" className="input" name="preco" value={formData.preco} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Categoria: </label>
                        <select className="input" name="categoria" value={formData.categoria} onChange={handleChange}>
                            <option value="" disabled>Selecione uma Opção</option>
                            <option value="eletronicos">Eletrônicos</option>
                            <option value="informatica">Informática</option>
                            <option value="Bazar">Bazar</option>
                            <option value="OrtiFrute">Orti-Frute</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Descrição:</label>
                        <textarea name="descricao" id="" className="input" value={formData.descricao} onChange={handleChange}></textarea>
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            
            {/**Exibir no html já cadastrados */}
            <div className="output">
            <h2>Produtos Cadastrados</h2>
                {cadastro.length > 0 && (
                    <table border="1">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cadastro.map((produto, index) =>(
                                <tr key={index}>
                                    <td>{produto.produto}</td>
                                    <td>{produto.preco}</td>
                                    <td>{produto.categoria}</td>
                                    <td>{produto.descricao}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                )}
                
            </div>
        </>
    )
}

export default Products;
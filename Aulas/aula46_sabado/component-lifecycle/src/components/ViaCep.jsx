import { useEffect, useState } from "react";
/*Desenvolva um componente React (De classe e funcional) que consome  a API viacep para buscar e exibir o endereço correspondente ao CEP recebido  por props, de modo a evidenciar  as fases de montagem, atualização e desmontagem.
 */

export default function ViaCep() {
    const [cep, setCep] = useState("");
    const [dados, setDados] = useState({});
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const enviarCEP = async(e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(url);
            const json = await response.json();
            
            setDados(json);
        } catch(erro) {
            console.log("Erro aos buscar os dados", erro);
        }

    }

    return (
        <>
            <div className="countainer">
                <h1>Busca por CEP</h1>

                <div>
                    <form action="" onSubmit={enviarCEP}>
                        <label htmlFor="">CEP:</label>
                        <input type="number" id="cep" value={cep} onChange={
                            (e) => setCep(e.target.value)
                        }/>
                        <button>Pesquisar</button>
                    </form>
                </div>

                <div id="output">
                    {/* <pre>{JSON.stringify(dados, null, 2)}</pre> */}
                    <p>CEP: {dados.cep}</p>
                    <p>Endereço: {dados.logradouro}</p>
                    <p>Bairro: {dados.bairro}</p>
                    <p>Cidade: {dados.localidade}</p>
                    <p>Estado: {dados.uf}</p>

                </div>
            </div>
        </>
    )
}
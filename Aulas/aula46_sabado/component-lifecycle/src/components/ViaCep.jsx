import { useEffect, useState } from "react";
/*Desenvolva um componente React (De classe e funcional) que consome  a API viacep para buscar e exibir o endereço correspondente ao CEP recebido  por props, de modo a evidenciar  as fases de montagem, atualização e desmontagem.
 */

export default function ViaCep() {
    const [cep, setCep] = useState("");
    const [dados, setDados] = useState([]);
    

    const enviarCEP = async(e) => {
        e.preventDefault();
        
        const url = `https://viacep.com.br/ws/${cep}/json/`
        

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
                    <pre>{JSON.stringify(dados, null, 2)}</pre>
                </div>
            </div>
        </>
    )
}
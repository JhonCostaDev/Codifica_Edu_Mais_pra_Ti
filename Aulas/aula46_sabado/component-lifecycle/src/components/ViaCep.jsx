import { useEffect, useState } from "react";
/*Desenvolva um componente React (De classe e funcional) que consome  a API viacep para buscar e exibir o endereço correspondente ao CEP recebido  por props, de modo a evidenciar  as fases de montagem, atualização e desmontagem.
 */

export default function ViaCep() {
    const [cep, setCep] = useState('');

    const findCep = () => {
        useEffect(() => {
            
        })
        
        setCep(event.target.value)
    }


    return (
        <>
            <div className="container">
                <h2>Busca por CEP</h2>
                <input type="text" value={cep} onChange={findCep}/>
                <p>Valor Digitado: {cep}</p>
            </div>
        </>
    )
}
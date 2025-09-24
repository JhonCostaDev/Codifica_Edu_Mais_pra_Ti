import { useEffect, useState } from "react";

function ViaCEPProf({cep}) {
    const [endereco, setEndereco] = useState(null);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setCarregando(true);
        setErro(null);

        console.log("useEffect executado (montagem ou atualização do CEP)");

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response =>{
            if(!response.ok) throw new Error("Erro na resposta da API");
            return response.json();
        })
        .then(data =>setEndereco(data))
        .catch(err => {
            setErro(err.message)
        })
        .finally(() => setCarregando(false))
    }, [cep])


    return (
        <div>
            <h2>Endereço: </h2>
            <p><strong>CEP: </strong>{endereco.cep}</p>
            <p><strong>Rua: </strong>{endereco.logradouro}</p>
            <p><strong>Bairro: </strong>{endereco.bairro}</p>
            <p><strong>Cidade: </strong>{endereco.localidade}</p>
            <p><strong>Estado: </strong>{endereco.uf}</p>
        </div>
    )
}

export default ViaCEPProf;
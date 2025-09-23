
document.getElementById("buscaCEP").addEventListener("submit", async function(event){
    event.preventDefault();
    const cep = document.getElementById("cep").value.trim();
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    const output = document.getElementById("output");



    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(Object.keys(result));
        output.innerHTML = `
        <p><strong>CEP:</strong> ${result.cep}</p>
        <p><strong>Estado:</strong> ${result.state}</p>
        <p><strong>Cidade:</strong> ${result.city}</p>
        <p><strong>Bairro:</strong> ${result.neighborhood}</p>
        <p><strong>Rua:</strong> ${result.street}</p>
        `;
    } catch (error) {
    console.error(error.message);
  }
    
    
});
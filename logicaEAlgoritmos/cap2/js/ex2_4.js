const formIn = document.querySelector('#formIn');

formIn.addEventListener('submit', (event) => {
    event.preventDefault();

    const inValorKilo = document.querySelector('#inValorKilo');
    const valorKilo = Number(inValorKilo.value);

    const InConsumo = document.querySelector("#InConsumo");
    const pesoConsumo = Number(InConsumo.value);

    const totalAPagar = (valorKilo / 1000) * pesoConsumo;


    const outTotal = document.querySelector("#outTotal");

    
    outTotal.textContent = 'Valor a pagar: R$' + totalAPagar.toFixed(2);
})


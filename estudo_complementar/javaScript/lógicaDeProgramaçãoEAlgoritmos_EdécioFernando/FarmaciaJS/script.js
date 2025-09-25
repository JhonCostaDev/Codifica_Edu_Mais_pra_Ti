document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault();
    const medicine = document.getElementById("medicine").value;
    const medicineValue = Number(document.getElementById('value').value);
    const output = document.getElementById("output");
    const onSale = parseInt(medicineValue) * 2;
    output.innerHTML = `
        <p>Promoção: Na compra de ${medicine}</p>
        <p>Leve 2 por apenas: ${onSale}</p>
    `;
})



document.querySelector(".inputs").addEventListener("submit", (e) => {
    e.preventDefault();//

    const productName = document.querySelector("#productName").value;

    const productValue = Number(document.querySelector("#productValue").value);

    const output = document.querySelector("#output");

    const total = (productValue * 3) - (productValue / 2)
    output.innerHTML = `
        <p>${productName} - Promoção: Leve 3 por R$${total.toFixed(2)}</p>

        <p>O 3º Pproduto custa apenas R$ ${(productValue / 2).toFixed(2)}</p>
    `;
})
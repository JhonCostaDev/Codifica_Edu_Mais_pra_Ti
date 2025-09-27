document.querySelector("#form").addEventListener("submit", function(e) {
    e.preventDefault();
    const hourPrice = Number(document.querySelector("#hourPrice").value);
    const timeSpent = document.querySelector("#timeSpent").value;
    const output = document.querySelector("#output");
    const result = timeSpent * hourPrice;
    //alert("Foi");
    output.innerHTML = `Total a pagar: R$${result.toFixed(2)}`;


})
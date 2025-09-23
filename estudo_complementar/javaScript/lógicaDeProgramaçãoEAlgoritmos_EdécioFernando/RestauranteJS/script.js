function calculaPreco() {
    const precoQuilo = document.getElementById("precoQuilo").value;
    const peso = document.getElementById("peso").value;
    const output = document.getElementById("output");
    
    output.innerHTML = precoQuilo * peso;
}


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculaPreco();

    this.reset();
})




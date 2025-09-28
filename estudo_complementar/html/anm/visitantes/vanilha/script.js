//TODO: tirar esse objeto daqui e colocar em um arquivo
const visitantes = [
    {
        name: 'luis perera',
        cpf: 45645645687,
        phone: 8598789878,
        servidor: "saulo"
    },
    {
        name: 'Maria Luiza',
        cpf: 45645645687,
        phone: 8598789878,
        servidor: "Helano"
    },
    {
        name: 'Chucha Saboia',
        cpf: 6547889221,
        phone: 6547889221,
        servidor: "Helano"
    }
];
const list = document.querySelector("#list");
list.innerHTML = `
    <h2>Visitantes</h2>
    <p><span>Nome</span> - <span>CPF</span> - <span>Setor/Servidor</span><span> Saida</span></p>
    `
visitantes.forEach(visitante => {
    const item = document.createElement("li");
    item.innerHTML = `
    <span>${visitante.name}  ${visitante.cpf} ${visitante.servidor}</span>
    <button onclick="removerItem(this)">Saida</button>
    `
    list.appendChild(item)
});

function removerItem(btn) {
    const item = btn.parentElement;
    item.remove();
}

function saveData(obj) {
    visitantes.push(obj);
}

document.querySelector("#cadastro").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    
})


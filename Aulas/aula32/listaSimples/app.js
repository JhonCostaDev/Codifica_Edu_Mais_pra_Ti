// Capturando os elementos do HTML
const formAdd = document.getElementById('formAdd');
const itemIn = document.getElementById('itemIn');
const listItens = document.getElementById('listItens');
const btnClean = document.getElementById('btnClean');

//Array para armazenar os itens digitados pelo usuário.
let itens = [];

//Quando a janela é carregada, verifica se o array itens já possui elementos, se positivo os mesmos serão exibidos.
window.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('listaCompras');

    itens = JSON.parse(data);
    showList();
})


//Essa função salva os dados no local storage no formato string JSON.
function saveData() {
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}


//Essa função exibe a lista na página
function showList() {
    listItens.innerHTML = '';
    itens.forEach((item, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = item;

        const btnRemove = document.createElement('button');
        btnRemove.textContent = 'x';
        btnRemove.title = 'Remover Item';
        btnRemove.addEventListener('click', () => {
            removeItem(index);
        })

        li.append(span, btnRemove);
        listItens.appendChild(li);
    })
}


//Captura o click do botão Adicionar e executa a arrowfunction
formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = itemIn.value.trim();

    if (!newItem) return;

    itens.push(newItem)
    saveData();
    showList();

    itemIn.value = '';
})

function removeItem(index) {
    itens.splice(index, 1)
    saveData();
    showList();
}

btnClean.addEventListener('click', () => {
    if(confirm('Deseja limpar toda a lista?')) {
        itens = [];
        saveData();
        showList();
    }
})
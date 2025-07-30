const formAdd = document.getElementById('form-add');
const inputItem = document.getElementById('input-item');
const btnLimpar = document.getElementById('btn-limpar');
const listaItens = document.getElementById('lista-itens');

let itens = [];

function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens));
} 

function renderizarLista() {
    listaItens.innerHTML = '';
    itens.forEach((item, index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = item;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.title = 'Remover Item';

        btnRemover.addEventListener('click', () => {
            removerItem(index);
        })

        li.append(span, btnRemover);
        listaItens.appendChild(li);


})
}

formAdd.addEventListener('submit', (event) => {
    const novoItem = inputItem.value.trim();
    if (!novoItem) return

    itens.push(novoItem);
    salvarDados();
    renderizarLista();

    inputItem.value = '';
})

function removerItem(index) {
    itens.splice(index, 1);
    salvarDados();
    renderizarLista();
}
const listForm = document.getElementById('listForm');

const inItem = document.getElementById('inItem');

const outList  = document.getElementById('outList');

const cleanList = document.getElementById('cleanList');

let list = [];

window.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('listaCompras');
    list = JSON.parse(data);
    showOutput();
});


listForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = inItem.value.trim();
    

    if(!newItem) return;

    list.push(newItem);
    saveData();
    showOutput();
    inItem.value = ''; // limpa o campo
});

function showOutput() {
    outList.innerHTML = '';

    list.forEach((item, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = item;

        const btnRemove = document.createElement('button');
        btnRemove.textContent = 'x';
        btnRemove.title = 'Remover Item';

        btnRemove.addEventListener('click', () => {
            removeItem(index); //FAZER AQUI
        })
        li.append(span, btnRemove);
        outList.appendChild(li);
    })
}

function removeItem(index) {
    list.splice(index, 1);
    saveData();
    showOutput();
}

function saveData () {
    localStorage.setItem('listaCompras', JSON.stringify(list));
}

cleanList.addEventListener('click', () => {
    if(confirm('Deseja Limpar a Lista?')) {
        list = [];
        saveData();
        showOutput();
        
    }
})
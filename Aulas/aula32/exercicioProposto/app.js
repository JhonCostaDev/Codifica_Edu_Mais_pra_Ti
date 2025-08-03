let list = [];
const listForm = document.getElementById('listForm');

const inItem = document.getElementById('inItem');

const outList  = document.getElementById('outList');

const cleanList = document.getElementById('cleanList');

const order = document.getElementById('order');


window.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('listaCompras');
    list = JSON.parse(data);
    showOutput();
    updateCount(); 
});


listForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = inItem.value.trim();
    

    if(!newItem) return;

    list.push(newItem);
    saveData();
    updateCount(); 
    showOutput();
    inItem.value = ''; // limpa o campo
});

function showOutput() {
    outList.innerHTML = '';

    list.forEach((item, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = item;

        const checkBox = document.createElement('input');
        checkBox.id = 'item-comprado'
        checkBox.type = 'checkbox';
        checkBox.title = 'Marcar como comprado';

        const btnRemove = document.createElement('button');
        btnRemove.textContent = 'x';
        btnRemove.title = 'Remover Item';

        btnRemove.addEventListener('click', () => {
            removeItem(index); //FAZER AQUI
        })
        li.append(checkBox,span, btnRemove);
        outList.appendChild(li);
    })
}

function removeItem(index) {
    list.splice(index, 1);
    saveData();
    updateCount(); 
    showOutput();
}

function saveData () {
    localStorage.setItem('listaCompras', JSON.stringify(list));
}

cleanList.addEventListener('click', () => {
    if(confirm('Deseja Limpar a Lista?')) {
        list = [];
        saveData();
        updateCount(); 
        showOutput();
        
    }
})

function updateCount() {
    document.getElementById('count').textContent = list.length;
}

order.addEventListener('click', () => {
    list.sort()
    saveData();
    updateCount(); 
    showOutput();
})
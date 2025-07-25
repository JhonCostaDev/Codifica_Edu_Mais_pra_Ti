// criar uma funcao de Progressao Aritimetica

function pA(inicio, razao, quantidade){
    let pa = []

    for(let i = 0; i < quantidade; i++) {
        if(pa.length == 0) {
            pa.push(inicio)
        } else {
            pa.push(pa[i - 1] + razao);
        }
    }
    return pa;
}

console.table(pA(1, 3, 10));
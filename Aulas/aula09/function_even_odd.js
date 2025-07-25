//Função retorna valores - Procedimentos não
function returnEvenOrOdd(value) {
    let result;

    if (value % 2 === 0) {
        result = 'Even';
    } else {
        result = 'Odd';
    }
    return result;
}

console.log(returnEvenOrOdd(2));
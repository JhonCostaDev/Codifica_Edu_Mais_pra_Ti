//Função retorna valores - Procedimentos não
function returnEvenOrOdd(value) {
    let result;

    if (value % 2 === 0) {
        result = 'Even';
    } else {
        result = 'Odd';
    }
    console.log(result);
}

returnEvenOrOdd(2);
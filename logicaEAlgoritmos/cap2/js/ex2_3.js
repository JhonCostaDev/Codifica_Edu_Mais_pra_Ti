function calculaPromocao() {
    const inModel = document.getElementById('inModel');

    const inPrice = document.getElementById('inPrice');

    const output = document.getElementById('output');

    const outDownPayment = document.getElementById('outDownPayment');

    const outModel = document.getElementById('outModel')

    const outInstallments = document.getElementById('outInstallments');


    //get input data
    const model = inModel.value;
    const price = Number(inPrice.value);

    //Calculating down payment
    const downPayment = price * 0.5;
    const installments = (price * 0.5) / 12;

    // Show output
    outModel.textContent = "Modelo: " + model;

    outDownPayment.textContent = "Entrada de: " + downPayment.toFixed(2);

    outInstallments.textContent = "+ 12x de R$: " + installments.toFixed(2);

}

// get cclick button
const btnCalc = document.getElementById('btnCalc');

btnCalc.addEventListener('click', calculaPromocao);


const btnClean = document.getElementById('btnClean');

btnCalc.addEventListener('click', () => {
    document.getElementById('inModel').value = '';

    document.getElementById('inPrice').value = '';
});

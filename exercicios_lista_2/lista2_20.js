/**20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).  sl = sb -(sb*0.12)*/
//DESCOBRIR COMO ADICIONAR NOVA COLUNA A TABELA;
const fs = require("fs");
const Papa = require("papaparse");

function showData(object) {
    for (key of object) {
        let register = key.matrícula;
        let name = key.nome;
        let occupation = key.cargo;
        let grossSalary = key['salário bruto'];
        let netSalary;
        console.log(`
            =============================
            Matrícula: ${register}
            Nome: ${name}
            Cargo: ${occupation}
            Salário Bruto: ${grossSalary}
            Salário Líquido: ${netSalary}
            =============================
            `);
        //console.log(occupation);
    }
}

function readCsvToObject(filePath) {
    const csvData = fs.readFileSync(filePath, "utf8");

    // Parseando os dados com PapaParse
    let dados = Papa.parse(csvData, {
        header: true, // Se o CSV tiver cabeçalhos
        skipEmptyLines: true // Ignora linhas vazias
    });

    return dados.data;
   
}

// Lendo o arquivo CSV
//filePath = '/home/jhon/Documents/GitHub/maisPraTi_codefica/exercicios_lista_2/dados.csv'
filePath = 'exercicios_lista_2/dados.csv' // -> No codespace
/*
const csvData = fs.readFileSync(filePath, "utf8");

// Parseando os dados com PapaParse
let dados = Papa.parse(csvData, {
    header: true, // Se o CSV tiver cabeçalhos
    skipEmptyLines: true // Ignora linhas vazias
});

const table = dados.data;
let tableLength = table.length
*/
const table = readCsvToObject(filePath);

showData(table);

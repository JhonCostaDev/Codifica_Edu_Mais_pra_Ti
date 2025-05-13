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

// Lendo o arquivo CSV
filePath = '/home/jhon/Documents/GitHub/maisPraTi_codefica/exercicios_lista_2/dados.csv'
const csvData = fs.readFileSync(filePath, "utf8");

// Parseando os dados com PapaParse
const resultado = Papa.parse(csvData, {
    header: true, // Se o CSV tiver cabeçalhos
    skipEmptyLines: true // Ignora linhas vazias
});


let tableLength = resultado.data.length

//console.log("Dados CSV:", resultado.data);

console.table(resultado.data);

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

/**
 * This function takes a .csv file and converts the data into an object array
 * @param {string} filePath - Path for the .csv file
 * @returns Return a JavaScript Object.
 */
function readCsvToObject(filePath) {
    const csvData = fs.readFileSync(filePath, "utf8");

    // Parseando os dados com PapaParse
    let dados = Papa.parse(csvData, {
        header: true, // Se o CSV tiver cabeçalhos
        skipEmptyLines: true // Ignora linhas vazias
    });
    return dados.data;
}


/**
 * This function show on console the summary of datas
 * @param {object} object 
 */
function showData(object) {
    for (let key of object) {
        let register = key['Matrícula'];
        let name = key['Nome'];
        let occupation = key['Cargo'];
        let grossSalary = key['Salário Bruto'];
        let inss = key['Desconto INSS'];
        let netSalary = key['Salário Líquido'];
        console.log(`
            =============================
            Matrícula: ${register}
            Nome: ${name}
            Cargo: ${occupation}
            Salário Bruto: ${grossSalary}
            Desconto INSS ${inss.toFixed(2)}
            Salário Líquido: ${netSalary.toFixed(2)}
            =============================
            `);
    }
}

/**
 * This function calculates the net salary of a list of employees, applying the INSS tax.
 * PT/BR
 * Calcula o salário líquido de uma lista de funcionários, aplicando o desconto do INSS.
 * @param {Array<Object>} objectTable - takes array<object> with data of employees how Gross Salary.
 * @returns {Array<Object>} Return a Array<Object> with the headers: matrícula, nome, cargo, salário bruto, desconto INSS e salário líquido
 * 
 * PT/BR
 * Retorna uma lista de objetos com matrícula, nome, cargo, salário bruto, desconto INSS e salário líquido.
 * 
 * @example
 * const funcionarios = [
 *   { matrícula: 101, nome: "Ana", cargo: "Analista", "salário bruto": 5000 },
 *   { matrícula: 102, nome: "Carlos", cargo: "Desenvolvedor", "salário bruto": 6000 }
 * ];
 * 
 * const salariosCalculados = calculateNetSalary(funcionarios);
 * console.log(salariosCalculados);
 * // Saída: [
 * //   { Matrícula: 101, Nome: "Ana", Cargo: "Analista", "Salário Bruto": 5000, "Desconto INSS": 600, "Salário Líquido": 4400 },
 * //   { Matrícula: 102, Nome: "Carlos", Cargo: "Desenvolvedor", "Salário Bruto": 6000, "Desconto INSS": 720, "Salário Líquido": 5280 }
 * // ]
 */
function calculateNetSalary(objectTable) {
    const list = [];
    for (let key of objectTable) {
        let grossSalary = key['salário bruto'];
        let inss = grossSalary * 0.12;
        let netSalary = grossSalary - inss; 
        list.push({
            'Matrícula': key.matrícula,
            'Nome': key.nome,
            'Cargo':  key.cargo,
            'Salário Bruto': grossSalary,
            'Desconto INSS' : inss,
            'Salário Líquido': netSalary,
        })
    }
    return list;
}

// Lendo o arquivo CSV
//filePath = '/home/jhon/Documents/GitHub/maisPraTi_codefica/exercicios_lista_2/dados.csv'
filePath = 'exercicios_lista_2/dados.csv' // -> No codespace

const table = readCsvToObject(filePath); // Atribuindo o objeto a uma variável


const newTable = calculateNetSalary(table); //calculando o desconto INSS


showData(newTable); // Exibindo o resultado no console.log.



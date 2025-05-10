/**
 * A turma C é composta por 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
 * 
 *  a) O número de alunos reprovados na turma C.
 *  b) O  número de alunos reprovados na turma D.
 *  c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.
 * 
 * 
 *  Exemplo de dados de entrada:
 *  10 (percentual de alunos reprovados na turma C)
 *  85 (percentual de alunos aprovados na turma D)
 * 
 *  Saída para os dados de entra acima
 *  6 (quanidade de alunos reprovados na turma C)
 *  11.25 (quanidade de alunos reprovados em relação ao total de alunos das duas turmas.
 */
const input = require("prompt-sync")();

const calculateQuantFailed = (total_students, percentage) => total_students * percentage / 100;
const calculateQuantPassed = (total_students, percentage) => total_students - (total_students * percentage / 100);

function getUserInput(string){
    let temp =Number(input(string));
    try{
        if(temp == "") {
            throw "is Empty";
        }  else if(isNaN(temp)) {
            throw "not a number";
        }else return temp;
    } catch(err) {
        console.error('Erro: Input', err)
        return false
    }
}
let total_C = 60; // Total de alunos da turma C
let total_D = 20; // Total de alunos da turma D
let totalStudents = total_C + total_D; // Soma dos estudantes
let percentageFailedC = getUserInput("What is the percentage of Failed C:  "); // Pega a porcentagem de reprovados de C
let percentageFailedD = getUserInput("What is the percentage of Failed D:  "); // Pega a porcentagem de reprovados de D

// a) O número de alunos reprovados na turma C.
let failed_C = calculateQuantFailed(total_C, percentageFailedC)

let passed_C = total_C - failed_C; // Numeros de alunos aprovados
console.log(`Total students failed of group C: ${failed_C}`);
console.log(`Total students passed of group C: ${passed_C}`);

// b) O  número de alunos reprovados na turma D.
let failed_D = calculateQuantFailed(total_D, percentageFailedD)
let passed_D = total_D - failed_D;
console.log(`Total students failed of group D: ${failed_D}`);
console.log(`Total students passed of group D: ${passed_D}`);

// c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.
let totalFiled = failed_C + failed_D;
console.log(`Total students failed of all students: ${totalFiled}`);


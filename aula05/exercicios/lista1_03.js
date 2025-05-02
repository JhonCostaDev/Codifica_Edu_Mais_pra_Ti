/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const input = require('prompt-sync')();

let grade = input('Type the grade: ');

if (grade <= 5){
    console.log('Failed');
} else if(grade <= 7) {
    console.log('In remedial classes');
} else {
    console.log('Passed');
}


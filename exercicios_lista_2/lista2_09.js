/**
 * 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de umfuncionário.
 */
const input = require("prompt-sync")();

let men = [];
let women = [];

function registerEmployee(){
    let wage = Number(input('Enter employee\'s wage:  '));
    let gender = input("Enter the employee's gender:  ").toLowerCase();

    if (gender == 'male') {
        men.push(wage);
    } else {
        women.push(wage);
    }
}

while(true) {
    console.log('============ Registre Employees ============');
    let option = input('Type (new) - register a new employee or (exit)to quit:   ');

    if (option == 'exit') break;

    registerEmployee();
}

let totalMen = men.reduce((additioner, wage) => additioner + wage, 0);
let totalWomen = women.reduce((additioner, wage) => additioner + wage, 0);

console.log(`Total Men: ${totalMen}`);
console.log(`Total Women: ${totalWomen}`);

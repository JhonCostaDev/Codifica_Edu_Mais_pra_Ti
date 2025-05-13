/**18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */
const input = require("prompt-sync")();
// Com listas
const employees = Array();


let again = true;
let count = 0;
while (again == true) {
    let name = input("Enter the employee's name:  ").toLowerCase();
    let position = input("Enter the employee's position:   ").toLowerCase();
    let salary = Number(input("Enter the employee's salary:  "));
    if (count === 0) {
        employees['Name'] = [name];
        employees['Position'] = [position];
        employees['Salary'] = [salary];
    }else {
        employees['Name'][count] = name;
        employees['Position'][count] = position;
        employees['Salary'][count] = salary;
    }
    count ++;

    let option = input("Do you want to register another employee?   <y> Yes or <n> No.").toLowerCase();

    if (option == 'n') again = false;
}

// for(index in employees){
//     console.log(`
//         Name: ${employees[index]},
//         Salary: ${employees[index]},
//         Position: ${employees[index]}
//         `);
// }
console.table(employees);
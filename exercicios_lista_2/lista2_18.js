/**18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */
const input = require("prompt-sync")();
// Com listas
const employeeName = [];
const employeePosition = [];
const employeeSalary = [];

let again = true;
while (again == true) {
    let name = input("Enter the employee's name:  ").toLowerCase();
    let position = input("Enter the employee's position:   ").toLowerCase();
    let salary = Number(input("Enter the employee's salary:  "));
    employeeName.push(name);
    employeePosition.push(position);
    employeeSalary.push(salary);

    let option = input("Do you want to register another employee?   <y> Yes or <n> No.").toLowerCase();

    if (option == 'n') again = false;
}

for(index in employeeName){
    console.log(`
        Name: ${employeeName[index]},
        Salary: ${employeeSalary[index]},
        Position: ${employeePosition[index]}
        `);
}

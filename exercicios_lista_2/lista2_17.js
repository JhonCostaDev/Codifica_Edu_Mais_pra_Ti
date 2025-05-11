/**17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */
const input = require("prompt-sync")();
//const names = [];
//const ages = [];
/*
for (let i = 0; i < 9; i++){
    let name = input('Enter the name:   ');
    let age = Number(input('Enter the age:   '));

    names.push(name);
    ages.push(age);
}
*/
const names = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda", "Fernando", "Gabriela", "Henrique", "Isabela", "João"];
const ages = [23, 35, 29, 41, 18, 27, 32, 45, 21, 38];
for (index in names){
    if(ages[index] > 30){
        console.log(`${names[index]}: ${ages[index]}`);
    }
}

//console.table()
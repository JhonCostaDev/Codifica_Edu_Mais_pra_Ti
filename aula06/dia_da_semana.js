//Faça um programa que leia o dia da semana
//["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
//esse dia deve ser um texto
// se for sabado ou domingo imprimir: Final de semana
//senão: Dia útil
const input = require("prompt-sync")();
const weekDays = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

let userDay = input("What's day is today?  ").toLowerCase();

if (weekDays.includes(userDay)){
    if(userDay == weekDays[0] || userDay == weekDays.slice(-1)[0]){
        console.log('Weekend');
    } else {
        console.log('weekday');
    }
} else {
    console.log('Invalid entry!!!')
}


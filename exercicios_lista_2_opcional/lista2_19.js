/**19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS. */
const input = require("prompt-sync")();
const now = new Date()
const storeTime = Array();

function validateTimeFormat(time) {
    return /^([01]\d|2[0-3])\:[0-5]\d\:[0-5]\d$/.test(time);;
}
//pegar e validar os 5 horarios
for (let i = 0; i<5; i++) {
    let time = input("Please enter the time (HH:MM:SS):   ");
    try{
        let isValid = validateTimeFormat(time);
        if(isValid){
            storeTime.push(time);
        }else {
            throw new Error("Invalid time format!");
        }
        
    } catch(err) {
        console.log(err)
    }
}

// let time =input("Please enter the time (HH:MM:SS):   ");
// console.log(validateTimeFormat(time));


console.table(storeTime)
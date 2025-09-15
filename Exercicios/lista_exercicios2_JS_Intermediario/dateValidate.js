/**1. Validação de Datas 
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores 
formarem  uma  data  real  (meses  de  28–31  dias,  ano  bissexto  para 
fevereiro) e false caso contrário. */

function ehDataValida(day, month, year) {
    const maxDaysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year < 1 || month < 1 || month > 12 || day < 1) return false;

    if(month === 2 && ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) {
        maxDaysMonth[1] = 29;
    }

    return day <= maxDaysMonth[month - 1];
}



console.log(monthDays.get('5'));
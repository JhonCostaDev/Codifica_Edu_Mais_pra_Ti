// Crie a  função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28-31 dias, ano bissexto para fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Ajuste para ano bissexto em fevereiro
    if (mes === 2 && ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0))) {
    diasPorMes[1] = 29;
    }

    return dia <= diasPorMes[mes - 1];
}

console.log(ehDataValida(29, 3, 2021));

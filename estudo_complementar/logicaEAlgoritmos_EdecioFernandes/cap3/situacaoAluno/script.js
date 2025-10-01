function calcAverage(gradeone, gradetwo) {
    const sum = gradeone + gradetwo;
    const average = sum / 2;
    return average;
}

function verifySituation(student, average) {
    if(average < 7) return `Com média ${average} o aluno ${student} foi REPROVADO`;
    
    return `Com média ${average} o aluno ${student} foi APROVADO`;
}

document.querySelector("#calcAverage").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;

    const firstGrade = Number(document.querySelector("#firstGrade").value);

    const secondGrade = Number(document.querySelector("#secondGrade").value);

    const outAverage = document.querySelector("#outAverage");
    const outSituation = document.querySelector("#outSituation");

    const average = calcAverage(firstGrade, secondGrade);

    outSituation.innerHTML = verifySituation(name, average);
})
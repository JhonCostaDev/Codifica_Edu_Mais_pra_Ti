function calcAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;  
}

function verifySituation(student, average, subject) {
    
    
    if(average < 7) return `Com média ${average} o aluno ${student} foi REPROVADO em ${subject}`;
    
    return `Com média ${average} o aluno ${student} foi APROVADO em ${subject}`;
}

function registerResult(name, subject, grades, average, situation) {
    return {
        aluno: name,
        materia: {
            nome: subject,
            notas: grades,
            media_final: average,
            situacao: situation
        }
    }
}

const alunos = [];
document.querySelector("#calcAverage").addEventListener("submit", (e) => {
    const grades = [];
    e.preventDefault();
    const name = document.querySelector("#name").value;

    const subject = document.querySelector("#subject");
    const subjectValue = subject.value;

    const firstGrade = Number(document.querySelector("#firstGrade").value);
    grades.push(firstGrade);
    const secondGrade = Number(document.querySelector("#secondGrade").value);
    grades.push(secondGrade);
    const thirdGrade = Number(document.querySelector("#thirdGrade").value);
    grades.push(thirdGrade);
    const fourthGrade = Number(document.querySelector("#fourthGrade").value);
    grades.push(fourthGrade);
    
    const average = calcAverage(grades);
    
    const outAverage = document.querySelector("#outAverage");
    const outSituation = document.querySelector("#outSituation");
    const situation = (average >= 7 ? "Aprovado": "Reprovado");
    
    alunos.push(registerResult(name, subjectValue, grades, average, situation));
    outSituation.innerHTML = verifySituation(name, average, subjectValue);
});
console.log(alunos);
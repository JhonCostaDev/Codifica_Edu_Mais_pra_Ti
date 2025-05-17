/**
 * Calcule as médias das notas dos alunos de um professor e diga se a turma do Professor está na média.
 */


let teacher = {
    'name': 'Stark Parker',
    'subject': 'Física',
    'grades': {
        'student1' : [5, 2],
        'student2' : [3, 7]
    }
}


let somaNotas = 0;
let numeroAlunos = 0;

for(let aluno in teacher.grades) {
    somaNotas += Array.isArray(teacher.grades[aluno]) ? teacher.grades[aluno].reduce((acc, num) => acc + num, 0) / teacher.grades[aluno].length : teacher.grades[aluno]

    numeroAlunos++;
}

let media = somaNotas/numeroAlunos;
console.log(media)
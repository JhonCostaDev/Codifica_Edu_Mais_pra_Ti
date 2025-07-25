/**
 * Calcule as médias das notas dos alunos de um professor e diga se a turma do Professor está na média.
 */
function calculateAverage(array) {
    if(Array.isArray(array)){
        let sum = array.reduce((acc, num) => acc + num, 0);
        return sum / array.length;
    } else{
        return array;
    }
}

function readObject(object) {
    let averages = [];

    for (let student of Object.values(object.grades)){
        let averageStudent = calculateAverage(student)
        averages.push(averageStudent);
    }
    return calculateAverage(averages);
}

let teacher = {
    'name': 'Stark Parker',
    'subject': 'Física',
    'grades': {
        'student1' : [5, 2],
        'student2' : [3, 7]
    }
}
teacher['averageClass'] = readObject(teacher);

if (readObject(teacher) >= 6) {
    console.log(`A media da turma e: ${readObject(teacher)} e esta acima do padrao `);
} else {
    console.log(`A media da turma e: ${readObject(teacher)} e nao esta acima do padrao !`);
}
console.log(teacher);

//console.log(Object.values(teacher.grades).flat())
//console.log(Array.isArray(5));

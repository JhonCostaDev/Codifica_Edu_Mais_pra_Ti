const fruits = ["apple", "banana", "cherry", "mango", "orange", "pear", "pineapple", "strawberry"]


// For In => indice
for(let idx in fruits) {
    console.log(`${idx}: ${fruits[idx]}`);
}

// For Of => valor
for (let item of fruits) {
    console.log(item);
}























let teacher = {
    'name': 'Stark Parker',
    'subject': 'Física',
    'grades': {
        'student1' : [5, 2],
        'student2' : [3, 7],
        'student3' : [8, 6],
    }
}
console.log('=================================');
let sumGrades = 0;
let sumLength = 0;
for(let grade of Object.values(teacher.grades)){
    sumLength += grade.length;
    let sum = grade.reduce((acc, cur) => acc + cur, 0);
    sumGrades += sum;
}

let teacherMean = sumGrades / sumLength;
console.clear();
console.log(sumGrades);
console.log(sumLength);
console.log(`Teacher Mean: ${teacherMean}`);
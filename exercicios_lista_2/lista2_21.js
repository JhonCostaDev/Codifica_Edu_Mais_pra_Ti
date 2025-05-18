// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
const input = require('prompt-sync')();

function idealWeight(height, gender) {
    
    if (gender == 'm') {
        return 72.7 * height - 58;
    } else {
        return  62.1 * height - 44.7;
    }
}

let userHeight = Number(input('Digite sua altura:   '));
let userGender = input("Digite < M > - Masculino ou < F > - Feminino:   ").toLowerCase();


let result = idealWeight(userHeight, userGender);

console.log(`Seu peso ideal deve ser ${result.toFixed(2)}`);





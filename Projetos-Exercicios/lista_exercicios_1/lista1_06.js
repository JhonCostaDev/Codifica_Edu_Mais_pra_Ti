/**
 * 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
 * 
 * Para verificar se os lados fornecidos formam triângulo: 
 * A < B + C e B < A + C e C < A + B
 * 
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 * 
* Equilátero: Todos os três lados têm a mesma medida.

* Exemplo: Lados de 6 cm, 6 cm e 6 cm.

* Isósceles: Dois lados têm a mesma medida e um é diferente.

* Exemplo: Lados de 5 cm, 5 cm e 3 cm.

* Escaleno: Todos os lados têm medidas diferentes.

* Exemplo: Lados de 7 cm, 5 cm e 3 cm.
 * 
 */

const input = require('prompt-sync')();


function verifyTriangle(a, b, c) {
    if((a < b + c) && (b < a + c) && (c < a + b)) {
        if ((a == b) && (b == c)) {
            return 'Is a triangle Equilátero';
        } else if ((a == b) || (b == c)) {
            return 'Is a triangle isósceles';
        } else {
            return 'Is a triangle Escaleno';
        }
    }

    return 'Is not a tringle';
}
 
let sideA = Number(input('Type the side A: '));
let sideB = Number(input('Type the side B: '));
let sideC = Number(input('Type the side C: '));

console.log(verifyTriangle(sideA, sideB, sideC));


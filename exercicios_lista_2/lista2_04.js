/**
 * 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
 */

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

// Verificar o maior de tres numeros
let num1 = 12; 
let num2 = 58; 
let num3 = 3;

let maior = num1;

if (num2 > maior) {
    maior = num2;
} else if (num3 > maior){
    maior = num3;
}
console.log(maior)
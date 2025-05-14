//faça uma função que inverta uma string.

function invertString(string) {
    let newString ='';
    for(let i = string.length -1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}

const invertStringFunctions = (string) => string.split('').reverse().join('');

console.log(invertString("hello")); // Saída: "olleh"


//invertString('Goiaba');
console.log(invertString('pindamonhagaba'));
console.log(invertStringFunctions('banana'));
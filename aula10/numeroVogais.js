//Encontre o número de vogais em uma string

function findVowels(string) {
    let numberVowels = 0;
    for(index in string) {
        if ('aeiou'.includes(string[index].toLowerCase())) {
            numberVowels++;
        }
    }
    return numberVowels;
}

//solucao professor
function countVowels(string){
    let vowels = string.match(/[aeiou]/gi); //regex
    return vowels ? vowels.length : 0;
}

console.log(findVowels('Dragon Age'));
console.log(countVowels('Banana'));


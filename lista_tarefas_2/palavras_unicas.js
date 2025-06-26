/**
 * Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
 */

const texto = "olá olá mundo mundo";
const palavras = texto.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let encontrada = false;

  for (let j = 0; j < unicas.length; j++) {
    if (palavras[i] === unicas[j]) {
      encontrada = true;
      break;
    }
  }

  if (!encontrada) {
    unicas.push(palavras[i]);
  }
}

console.log(unicas); // Saída: [ 'olá', 'mundo' ]

/**Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo. */
function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const log = () => console.log("Executando...");
const debouncedLog = debounce(log, 1000);

debouncedLog(); // Espera 1s
debouncedLog(); // Reinicia o tempo
debouncedLog(); // Reinicia de novo
// Só será exibido "Executando..." 1 segundo após a última chamada

/**6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. */

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const chave = JSON.stringify(args);

    if (cache.has(chave)) {
      return cache.get(chave); 
    }

    const resultado = fn.apply(this, args);
    cache.set(chave, resultado); 
    return resultado;
  };
}

function somaLenta(a, b) {
  console.log("Calculando...");
  return a + b;
}

const somaMemo = memoize(somaLenta);

console.log(somaMemo(2, 3)); // Calcula e exibe 5
console.log(somaMemo(2, 3)); // Recupera do cache, não recalcula


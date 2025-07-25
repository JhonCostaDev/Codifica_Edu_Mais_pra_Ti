/**
 * Implemente uma function memorize(fn) que armazene em cache chamadas anteriores de uma fn(por argumento), retornando resultados instantaneos em repetidas invocacoes.
 */

function memorize(fn) {
    const cache = new Map();
    return function(...args) {
        const key  = JSON.stringify(args)

        if(cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result)
        return result;
    }
}

function fibonacci(number) {
    if(number<2) return number;
    return fibonacci(number - 1) + fibonacci(number - 2); 
}

const fastFibo = memorize(function fibonacci(number){
    if(number < 2) return number;
    return fastFibo(number - 1) + fastFibo(number - 2) 
})

console.log(fastFibo(50));
console.log(fibonacci(50));
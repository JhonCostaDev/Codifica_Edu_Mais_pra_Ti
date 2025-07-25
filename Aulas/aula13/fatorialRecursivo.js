//fatorial recursivo

function fatorial(num){
    if(num === 0) return 1;         // se o num for 0, retorna 1
                                    // senão retorna o numero vezes a funcao do numero menos 1;    
    return num * fatorial(num -1); 
}

console.log(fatorial(5));
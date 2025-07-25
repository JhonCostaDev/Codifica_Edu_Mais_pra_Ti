//Função que gera aleatório entre dois numero

const getRandom = (a, b) => Math.random() * (b - a + 1) + a;

console.log(getRandom(5, 8));

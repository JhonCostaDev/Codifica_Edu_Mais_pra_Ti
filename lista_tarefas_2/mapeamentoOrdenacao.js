/**7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort. */

function ordenadosPorPreco(produtos) {
  return produtos
    .slice() // evita modificar o array original
    .sort((a, b) => a.preco - b.preco) // ordena por preço crescente
    .map(produto => produto.nome); // extrai apenas os nomes
}


const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 80 },
  { nome: "Monitor", preco: 700 },
  { nome: "Cabo HDMI", preco: 30 }
];

console.log(ordenadosPorPreco(produtos));


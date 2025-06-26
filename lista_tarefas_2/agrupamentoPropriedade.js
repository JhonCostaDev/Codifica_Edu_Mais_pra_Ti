/**8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */

function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    if (acumulador[cliente]) {
      acumulador[cliente] += total;
    } else {
      acumulador[cliente] = total;
    }

    return acumulador;
  }, {});
}


const vendas = [
  { cliente: "Alice", total: 100 },
  { cliente: "Bob", total: 200 },
  { cliente: "Alice", total: 150 },
  { cliente: "Carlos", total: 300 }
];

console.log(agruparPorCliente(vendas));
// Saída: { Alice: 250, Bob: 200, Carlos: 300 }

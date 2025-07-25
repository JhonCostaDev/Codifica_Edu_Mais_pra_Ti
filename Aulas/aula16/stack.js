class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class Pilha {
  constructor() {
    this.topo = null;
  }

  push(valor) {
    const novoNode = new Node(valor);
    novoNode.proximo = this.topo;
    this.topo = novoNode;
  }

  pop() {
    if (!this.topo) return null;
    const valorRemovido = this.topo.valor;
    this.topo = this.topo.proximo;
    return valorRemovido;
  }

  peek() {
    return this.topo ? this.topo.valor : null;
  }

  isEmpty() {
    return this.topo === null;
  }
}


const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
console.log(pilha.peek()); // 20
console.log(pilha.pop());  // 20
console.log(pilha.peek()); // 10

// Definição do Nó (Node) - comum para Pilhas e Filas com Lista
class Node {
    constructor(value) {
        this.value = value; // O dado armazenado no nó
        this.next = null;   // Referência para o próximo nó
    }
}

class StackComLista {
    constructor() {
        this.top = null; // Referência para o nó do topo da pilha
        this.count = 0;  // Contador para o tamanho da pilha
    }

    // Adiciona um elemento ao topo da pilha
    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.next = this.top; // O novo nó aponta para o antigo topo
            this.top = newNode;      // O novo nó se torna o topo
        }
        this.count++;
        console.log(`${value} adicionado à pilha.`);
    }

    // Remove e retorna o elemento do topo da pilha
    pop() {
        if (this.isEmpty()) {
            console.log("Pilha vazia. Não é possível remover.");
            return null;
        }
        const removedValue = this.top.value;
        this.top = this.top.next; // O topo agora é o próximo elemento
        this.count--;
        console.log(`${removedValue} removido da pilha.`);
        return removedValue;
    }

    // Retorna o elemento do topo sem remover
    peek() {
        if (this.isEmpty()) {
            console.log("Pilha vazia.");
            return null;
        }
        console.log(`Topo da pilha: ${this.top.value}`);
        return this.top.value;
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.top === null; // Ou this.count === 0
    }

    // Retorna o tamanho da pilha
    size() {
        console.log(`Tamanho da pilha: ${this.count}`);
        return this.count;
    }
}

// Exemplo de uso da Pilha com Lista:
const minhaPilhaLista = new StackComLista();
minhaPilhaLista.push(10); // 10 adicionado
minhaPilhaLista.push(20); // 20 adicionado
minhaPilhaLista.peek();   // Topo: 20
minhaPilhaLista.pop();    // 20 removido
minhaPilhaLista.size();   // Tamanho: 1
console.log("Pilha está vazia?", minhaPilhaLista.isEmpty()); // false


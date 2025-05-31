# Linked Lists

São uma estrutura de dados fundamental, oferecendo uma maneira flexível e eficiente de armazenar e manipular coleções de elementos.

Uma lista ligada é composta por nós, onde cada nó contém dados e uma referência (ou link) para o próximo nó da sequência. Isso é diferente dos arrays normais, pois listas ligadas não requerem um bloco contínuo de memória, permitindo inserções e remoções de elementos com eficiência sem a necessidade de reorganizar toda a coleção.

#### Implementação

```javascript
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Método para adicionar elementos no início
    addFirst(data) {
        let newNode = new ListNode(data);
        newNode.next = this.head;
    }

    // Método para adicionar elementos no final
    addLast(data) {
        let newNode = new ListNode(data);
        if(!this.head) {
            this.head = newNode;
            return;
        }

        let tail = this.head;
        while(tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
    }
}
```
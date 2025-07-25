// Aula 16 Stacks - First In, Last Out - Pilhas e Filas

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) return null;

        let poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }

    peek() {
        if(!this.top) return null;
        return this.top.value;
    }

    isEmpty() {
        this.top === null;
    }
}
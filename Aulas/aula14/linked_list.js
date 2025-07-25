class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addBegin(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    print() {
        let current = this.head;
        let str = '';
        while(current) {
            str += current.value + '->'
            current = current.next;
        }
        str += 'null';
        console.log(str);
    }
}

let lista = new LinkedList();

lista.addBegin(10);
lista.addBegin(9);
lista.print();
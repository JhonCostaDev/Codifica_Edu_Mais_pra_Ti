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

    addAtFirst(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    showList() {
        let curr = this.head;
        let str = '';

        while(curr) {
            str += curr.value + '->';
            curr = curr.next;
        }

        str += 'null';
        console.log(str);
    }
}

let numbers = new LinkedList();
numbers.addAtFirst(4);
numbers.addAtFirst(6);
numbers.addAtFirst(8);
numbers.addAtFirst(1);
numbers.addAtFirst(5);
console.log(numbers.head)
numbers.showList();


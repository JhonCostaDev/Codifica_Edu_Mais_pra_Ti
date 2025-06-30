class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head =  null;
        this.tail = null;
        this.length = 0;
    }

    insertAtFirst(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    insertAtEnd(){
        let newNode = new Node(value);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    insertAnyWhere(index, value) {
        if(index < 0 || index > this.length) throw RangeError ("Index out of range!")
        
        if(index === 0) return this.insertAtFirst(value)
        if(index === this.length) return this.insertAtEnd(value)

        let current = this.head;

        for(let i = 0; i < index; i++) {
            current = current.next;
        }

        let newNode = new Node(value);
        let prevNode = current.prev;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = current;
        current.prev = newNode;

        this.length++;
    }

    removeAt(index) {
        // 1:22 aula15
    }

    printNext() {

    }

    printPrev() {

    }
}
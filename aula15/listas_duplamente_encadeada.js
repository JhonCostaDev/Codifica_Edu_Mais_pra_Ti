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
        if(index < 0 || index > this.length) throw RangeError("Index out of range!");

        let removed;

        if(this.length === 1) {
            removed = this.head;
            this.head = this.tail = null;

        } else if(index === 0) {
            removed = this.head;
            this.head = this.head.next;
            this.head.prev = null;
        } else if(index === this.length -1) {
            removed = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let current = this.head;

            for(let i = 0; i < index; i++) {
                current = current.next;
            }

            removed = current;
            const {next, prev} = current;
            prev.next = next;
        }

        this.length--;
    }

    printNext() {

    }

    printPrev() {

    }
}
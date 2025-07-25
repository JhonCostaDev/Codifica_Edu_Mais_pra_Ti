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

    printList() {
        let current = this.head;
        while(current !== null) {
            console.log({current: current.data, next: current.next});
            current = current.next;
        }
    }
}

const testList = () => {
    const list = new LinkedList();

    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addLast(4);
    list.addLast(5);
    list.addLast(6);
    list.printList();
}

testList();
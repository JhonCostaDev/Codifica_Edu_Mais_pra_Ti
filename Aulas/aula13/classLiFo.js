class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(element) {
        this.items[this.size] = element;
        this.size++;
    }

    pop() {
        if(this.size === 0) {
            return 'Stack empty';
        }

        let removedItem = this.items[this.size - 1];
        this.items.length = this.size - 1;
        this.size--;

        return removedItem;
    }

    print(){
        return this.items;
    }
}

let myStack = new Stack();

myStack.push(5);
myStack.push(8);
myStack.push(3);
myStack.push(1);
console.log(myStack.print());

myStack.pop()
console.log(myStack.print());

myStack.pop()
console.log(myStack.print());


myStack.pop()
console.log(myStack.print());

myStack.pop()
console.log(myStack.print());
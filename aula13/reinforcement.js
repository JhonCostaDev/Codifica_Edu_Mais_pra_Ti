// Create functions to simulate the LIFO stack.

function pushStack(item, list) {
    let idx = list.length;
    list[idx] = item;
}

function removeStack(list) {
    if (list.length === 0) {
        return "Empty array";
    } else {
        let itemRemoved = list[list.length -1];
        list.length = list.length - 1; 
        return itemRemoved;
    }
}

let stack = [];

pushStack(4, stack);
console.log(stack);


pushStack(3, stack);
console.log(stack);

pushStack(2, stack);
console.log(stack);

pushStack(5, stack);
console.log(stack);
console.log(stack.length)

console.log(removeStack(stack));
console.log(stack);
console.log(removeStack(stack));
console.log(stack);
console.log(removeStack(stack));
console.log(stack);
console.log(removeStack(stack));
console.log(stack);
console.log(removeStack(stack));
console.log(stack);


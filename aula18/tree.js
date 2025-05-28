class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value === value);
    }
}

class Tree {
    constructor(rootValue) {
        
    }
}
class TreeNode {

     private data: any;
     left: any;
     right: any;

    constructor(data:any, left:any = null, right:any = null) {
        this.data = data;
        this.left = left;
        this.right= right;
    }
}

class Tree {
    root: any;

    constructor() {
        this.root = null;
    }

    collect() {
        return this._collect(this.root, [])
    }

    _collect(node: any, result: any[]) {

        // base case: if there's no node just return the array
        if (node === null) {
            return result;
        }

        // add the current node to the array
        result.push(node.data)

        // recursive left and right
        this._collect(node.left, result);
        this._collect(node.right, result);

        return result;
    }
}

const n1 = new TreeNode(32);
const n2 = new TreeNode(19);
const n3 = new TreeNode(7);
const n4 = new TreeNode(87);
const n5 = new TreeNode(1);

const tree = new Tree();

tree.root = n1;
n1.left = n2;
n1.right = n3;
n3.right = n4;
n4.left = n5;

console.log(tree.collect());
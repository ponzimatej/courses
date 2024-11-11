class BinarySearchTree {
  constructor() {
    this.root = undefined;
    this.amount = 0;
  }

  add(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      this.amount++;
      return;
    }

    let current = this.root;

    while (current) {
      if (node.value >= current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          this.amount++;
          break;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          this.amount++;
          break;
        }
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return current;
      if (value >= current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }

  contains(value) {
    return !!this.search(value);
  }

  findParent(node) {
    let current = this.root;
    while (current) {
      if (current.left === node || current.right === node) return current;
      if (node.value >= current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }

  delete(value) {
    let node = this.search(value);

    if (!node) {
      // if node doesnt exist, return
      console.log(`Couldnt delete, tree does not include ${value}`);
      return;
    }

    let parent = this.findParent(node);

    if (!node.left && !node.right) {
      // if node is a leaf node, remove it
      if (parent.left === node) parent.left = undefined;
      if (parent.right === node) parent.right = undefined;
    }

    if (!node.left && node.right) {
      // if node only has right child, remove it and link its parent to the child
      if (parent && parent.left === node) parent.left = node.right;
      if (parent && parent.right === node) parent.right = node.right;
      if (!parent) this.root = node.right;
    }

    if (!node.right && node.left) {
      // if node only has left child, remove it and link its parent to the child
      if (parent && parent.left === node) parent.left = node.left;
      if (parent && parent.right === node) parent.right = node.left;
      if (!parent) this.root = node.left;
    }

    if (node.left && node.right) {
      //if node has two children
      let current = node.left;
      while (current.right) {
        //find the largest number on the left of the parent
        current = current.right;
      }

      let newParent = this.findParent(current); // find parent of the largest number

      if (newParent === node) {
        // if the parent of the largest number is also the node to be deleted
        if (current.left) {
          // if the largest number has a left child
          current.right = node.right;
          console.log("here");
        } else if (!current.left) {
          //if the largest number does not have a left child
          current.right = node.right;
        }
      } else if (newParent !== node) {
        // if the parent of the largest number is different than the node to be deleted
        if (current.left) {
          //if the largest number has a left child
          newParent.right = current.left;
          current.left = node.left;
          current.right = node.right;
        } else if (!current.left) {
          //if the largest number does not have a left child
          newParent.right = undefined;
          current.left = node.left;
          current.right = node.right;
        }
      }

      if (node === this.root) {
        this.root = current;
        this.root.right = node.right;
      }
      if (parent && parent.right === node) parent.right = current; //conect to the original parent
      if (parent && parent.left === node) parent.left = current; //conect to the original parent
    }
    this.amount--;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  toString() {
    return `Node { value: ${this.value}, left: ${this.left}, right: ${this.right}}`;
  }
}

const bst = new BinarySearchTree();

bst.add(7);
bst.add(1);
bst.add(5);
bst.add(3);
bst.add(4);
bst.add(6);

console.log(bst.contains(1));

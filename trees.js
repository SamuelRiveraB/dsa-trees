class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    return this;
  }

  lookup() {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(9);
tree.insert(9);
tree.insert(9);
tree.insert(9);
tree.insert(9);
tree.insert(9);
JSON.stringify(traverse(tree.root));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

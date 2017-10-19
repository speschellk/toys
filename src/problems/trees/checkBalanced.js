/*
  Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

  I: binary tree
  O: boolean indicating whether or not tree heights differ by 1 or less
  C:
  E: no tree, not full, not complete, not BST


*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addChild(value) {
    let tree = this;
    let child = new BinaryTree(value);

    if (!this.left) {
      this.left = new BinaryTree(value);
    } else if (!this.right) {
      this.right = new BinaryTree(value);
    }
  }
}

let btree = new BinaryTree(1);
btree.addChild(4);
btree.addChild(7);
// btree.left.addChild(12);
// btree.left.addChild(5);
// btree.left.left.addChild(18);

// console.log('tree is', btree)


function isBalanced(tree) {
  let diff = Math.abs(getHeight(tree.left) - getHeight(tree.right));
  return diff < 2 ? true : false;
}

function getHeight(tree) {
  if (!tree) return 0;
  return 1 + Math.max(getHeight(tree.left), getHeight(tree.right));
}

console.log(isBalanced(btree));



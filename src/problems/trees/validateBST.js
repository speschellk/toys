/*
  Implement a function to check if a binary tree is a binary search tree.
*/

// tree class
class Tree {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// helper to make tree from array
function minimalTree(a) {
  if (!a || !a.length) return null;

  let mid = Math.floor(a.length / 2);
  let tree = new Tree(a[mid]);

  tree.left = minimalTree(a.slice(0, mid));
  tree.right = minimalTree(a.slice(mid + 1));

  return tree;
}

function isBST(tree) {
  if (!tree) return null;

  if (tree.left && tree.left.value > tree.value || tree.right && tree.right.value <= tree.value) {
    return false;
  } else {
    return true;
  }
  return !!(isBST(tree.left) + isBST(tree.right));
}

let bst = minimalTree([1, 2, 3, 4, 5, 6, 7]);
console.log(isBST(bst));

let bt = minimalTree([5, 4, 3, 2, 8, 10, -27, 56]);
console.log(isBST(bt));

console.log(isBST());
console.log(isBST(minimalTree([1])))

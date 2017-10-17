/*
Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

I: sorted (asc) array with unique integer elements
O: binary search tree with minimal height
C: unique integers in array, no repeats, no non-ints
E: no array, empty array, etc.

Examples:
[1, 2, 3, 4, 5, 6, 7]

      4
    /   \
   2     6
 /  \   /  \
1    3 5    7
*/

// start at middle of array
// create new tree node with this value
// left and right slices

class Tree {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function minimalTree(a) {
  if (!a || !a.length) return null;

  let mid = Math.floor(a.length / 2);
  let tree = new Tree(a[mid]);

  tree.left = minimalTree(a.slice(0, mid));
  tree.right = minimalTree(a.slice(mid + 1));

  return tree;
}

console.log(minimalTree())
console.log(minimalTree([]))
console.log(minimalTree([1, 2, 3, 4, 5, 6, 7]))
console.log(minimalTree([1, 5, 6, 9, 20, 100]))

/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   let root1 = new Tree(1);
  *   let branch2 = root1.addChild(2);
  *   let branch3 = root1.addChild(3);
  *   let leaf4 = branch2.addChild(4);
  *   let leaf5 = branch2.addChild(5);
  *   let leaf6 = branch3.addChild(6);
  *   let leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

let Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {
  let stack = [];
  let results = [];
  let depth = 0;
  let node;
  stack.push([this, depth]);

  while (stack.length) {
    let tuple = stack.pop();
    node = tuple[0];
    depth = tuple[1];
    if (filter(node.value, depth)) {
      results.push(node.value);
    }

    if (node.children.length) {
      depth++;
    }

    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push([node.children[i], depth]);
    }
  }
  return results;
};



/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  let index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

let root1 = new Tree(1);
let branch2 = root1.addChild(2);
let branch3 = root1.addChild(3);
let leaf4 = branch2.addChild(4);
let leaf5 = branch2.addChild(5);
let leaf6 = branch3.addChild(6);
let leaf7 = branch3.addChild(7);

console.log(root1.DFSelect(function (value, depth) {
  return value % 2;
})); // [1, 5, 3, 7]

console.log(root1.DFSelect(function (value, depth) {
  return depth === 1;
})); // [2, 3]

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }
  removeHead() {
    if (!this.head) return null;

    let currentHead = this.head;
    this.head = this.head.next;
    return currentHead;
  }
  contains(target) {
    if (this.value === target) {
      return true;
    }
    while (this.head.next) {
      this.head = this.head.next;
      this.head.contains(target)
    }
    return false;
  }
}

let list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(1);
list.addToTail(3);
list.addToTail(1);
list.addToTail(2);

console.log(removeDuplicates(list)); // list should have node values 1, 2, 3, head and tail

function removeDuplicates(list) {
  let nodeSet = new Set();
  let previous;
  let node = list.head;

  do {
    if (!nodeSet.has(node.value)) {
      nodeSet.add(node.value);
      previous = node;
      node = node.next;
    } else {
      let nodeToDelete = node;
      previous.next = node = node.next;
      delete nodeToDelete;
    }
  } while(node);

  list.tail = previous;
  return list;
}

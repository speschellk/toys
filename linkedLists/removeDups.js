/* Write code to remove duplicates from an unsorted linked list.

I: unsorted linked list (or nodes in the list)
O: duplicate-free version of the list
C: try with no extra space, also with minimum time complexity
E: no list, list with single node
*/

class Node {
  constructor(value) {
    this.value = value;
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
  removeNode(prev) {
    // node represented by this.prev.next is the one to remove
    // this.prev.next.next is the subsequent node
    let removed = this.prev.next;
    this.prev.next = this.prev.next.next;
    delete this.prev.next;
  }
  contains(target) {
    if (this.head.value === target) return true;

    return !!(this.head.next && this.head.next.contains(target));
  }
  traverse(cb) {
    cb(this.head);

    while (this.head.next) {
      this.head.next.traverse(cb);
    }
  }
}

const list = new LinkedList();
list.addToTail(2);  // head
list.addToTail(5);  // head.next
list.addToTail(3);  // head.next.next
list.addToTail(2);  // head.next.next.next
list.addToTail(10); // head.next.next.next.next
list.addToTail(5);  // head.next.next.next.next.next === tail

// naive solution
// Time complexity: O(n)
// Space complexity: O(n)

function removeDups(list) {
  let set = new Set();
  let previous = null;
  let node = list.head;           // points to a node with .value and .next properties

  while (node) {
    if (set.has(node.value)) {    // this is a repeat node, remove it
      previous.next = node.next;  // previous.next should be next node
      list.removeHead();
    } else {
      set.add(node.value);        // add node value to set
      previous = node;            // 'previous' becomes current node as we prep to move on
    }
    node = node.next;
  }
  list.tail = previous;
  return list;
}

console.log(removeDups(list));

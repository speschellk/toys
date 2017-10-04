/*
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

I: singly linked list (or node of SLL)
O: kth to last element of the list
C: none specified; solve with and without extra data structures.
E: no list or no k passed in, list is single node, list is two nodes, k is longer than list
*/

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    this.length++;
  }
  removeHead() {
    if (!this.head) return null;

    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
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

// list
let list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);

let list2= new LinkedList();
list2.addToTail(1);


/*
 Implementation if LinkedList class has a length property
 Time complexity: O(n)
 Space complexity: O(1) extra space
*/
function kthToLast(list, k) {
  if (!list || !k || k > list.length) return null;

  let targetNode = list.length - k + 1; // 4th from last in list of length 6 => 3rd node.
  let nodeCount = 1;
  let currentNode = list.head;

  while (targetNode > nodeCount) {
    currentNode = currentNode.next;
    nodeCount++;
  }

  return currentNode;
}



/*
 Implementation if LinkedList class has no length property and no extra data structures
 Time complexity: O(n^2)
 Space complexity: O(1) extra space
 */
function kToLast(list, k) {
  if (!list || !k) return null;
  let length = 1;
  let currentNode = list.head;

  while (currentNode.next) {
    currentNode = currentNode.next;
    length++;
  }

  list.length = length;
  return kthToLast(list, k);
}


/*
 Implementation if no length property, but data structures allowed
 Time complexity: O(n)
 Space complexity: O(n)
*/
function kthToLastMap(list, k) {
  if (!list || !k) return null;

  let length = 1;
  let currentNode = list.head;
  let nodeMap = new Map();
  nodeMap.set(1, list.head);

  while (currentNode.next) {
    currentNode = currentNode.next;
    length++;
    nodeMap.set(length, currentNode);
  }

  return k > length ? null : nodeMap.get((length - k + 1));
}


/* Test cases */
console.log(kthToLast());            // null
console.log(kthToLast(list, 4));     // node.value = 3, node.next = 4
console.log(kthToLast(list, 12));    // null
console.log(kthToLast(list, 1));     // node.value = 6, node.next = null
console.log(kthToLast(list, 6));     // node.value = 1, node.next = 2
console.log(kthToLast(list2, 1));    // node.value = 1, node.next = null

console.log(kToLast());              // null
console.log(kToLast(list, 4));       // node.value = 3, node.next = 4
console.log(kToLast(list, 12));      // null
console.log(kToLast(list, 1));       // node.value = 6, node.next = null
console.log(kToLast(list, 6));       // node.value = 1, node.next = 2
console.log(kToLast(list2, 1));      // node.value = 1, node.next = null

console.log(kthToLastMap());         // null
console.log(kthToLastMap(list, 4));  // node.value = 3, node.next = 4
console.log(kthToLastMap(list, 12)); // null
console.log(kthToLastMap(list, 1));  // node.value = 6, node.next = null
console.log(kthToLastMap(list, 6));  // node.value = 1, node.next = 2
console.log(kthToLastMap(list2, 1)); // node.value = 1, node.next = null

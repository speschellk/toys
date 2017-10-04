/*
 Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

I: the node c from the linked list a->b->c->d->e->f
O: nothing is returned, but the new linked list looks like a->b->d->e->f
C: given access only to the node that will be removed
E: no node passed in
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
    let node = this.head;

    while (node) {
      if (node.value === target) return true;
      node = node.next;
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
list.removeHead()

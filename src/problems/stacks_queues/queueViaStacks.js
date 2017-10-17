// Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  add(value) {
    this.stack1.push(value);
    this.stack2.unshift(this.stack1.pop());
  }

  remove() {
    this.stack2.pop();
  }

  peek() {
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack2.length ? false : true;
  }
}

/* Tests */
let queue = new MyQueue();
queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue);
queue.remove();
console.log(queue);
console.log(queue.peek());
console.log(queue.isEmpty());
queue.remove();
queue.remove();
console.log(queue.isEmpty());

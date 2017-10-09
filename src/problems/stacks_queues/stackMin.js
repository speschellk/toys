/*
How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.
*/

class Stack {
  constructor() {
    this.storage = {};
    this._size = 0;
    this.minStorage = {}
  }
  push(value) {
    this.storage[this._size++] = value;
    if (!this.min || value < this.min) {
      this.min = value;
    }
  }
  pop() {
    this.size() && this._size--;
    let result = this.storage[this._size];
    delete this.storage[this._size];
    return result;
  }
  min() {
    return this.min;
  }
  size() {
    return this._size;
  }
}

let stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(18);
stack.push(-3);
console.log(stack)
console.log(stack.min)
stack.pop();
stack.pop();
console.log(stack.min)

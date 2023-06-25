// given

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.pop()); // Output: 30

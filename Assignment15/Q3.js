class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(element) {
    this.q1.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    const poppedElement = this.q1.shift();

    [this.q1, this.q2] = [this.q2, this.q1];

    return poppedElement;
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }

    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    const topElement = this.q1[0];

    this.q2.push(this.q1.shift());

    [this.q1, this.q2] = [this.q2, this.q1];

    return topElement;
  }

  isEmpty() {
    return this.q1.length === 0 && this.q2.length === 0;
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());

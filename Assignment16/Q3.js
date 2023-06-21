// given

function deleteMiddleElement(stack) {
  if (stack.length === 0) {
    return stack;
  }

  const midIndex = Math.floor(stack.length / 2);
  deleteMiddleHelper(stack, midIndex);

  return stack;
}

function deleteMiddleHelper(stack, index) {
  if (index === 0) {
    stack.pop();
    return;
  }

  const temp = stack.pop();
  deleteMiddleHelper(stack, index - 1);
  stack.push(temp);
}

// Example usage:
const stack1 = [1, 2, 3, 4, 5];
console.log("Original Stack:", stack1);
deleteMiddleElement(stack1);
console.log("Updated Stack:", stack1);

const stack2 = [1, 2, 3, 4, 5, 6];
console.log("Original Stack:", stack2);
deleteMiddleElement(stack2);
console.log("Updated Stack:", stack2);

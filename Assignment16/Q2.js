// given

const stack = [5, 2, 9, 1, 3];

function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack;
}

const sortedStack = sortStack(stack);
console.log("Original Stack:", stack);
console.log("Sorted Stack:", sortedStack);

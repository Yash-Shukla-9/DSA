// given

function reverseStack(St) {
  if (St.length <= 1) {
    return St;
  }

  const topElement = St.pop();
  const reversedStack = reverseStack(St);
  insertAtBottom(reversedStack, topElement);
  return reversedStack;
}

function insertAtBottom(St, element) {
  if (St.length === 0) {
    St.push(element);
    return;
  }

  const tempElement = St.pop();
  insertAtBottom(St, element);
  St.push(tempElement);
}

// Example usage:
const stack = [1, 2, 3, 4, 5];
console.log("Original Stack:", stack);
const reversedStack = reverseStack(stack);
console.log("Reversed Stack:", reversedStack);

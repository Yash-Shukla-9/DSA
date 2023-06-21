// given

function findNextGreaterElements(arr) {
  const stack = [];
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return result.reverse();
}

const arr = [4, 6, 3, 2, 8, 1, 9];

const nextGreaterElements = findNextGreaterElements(arr);
console.log(nextGreaterElements);

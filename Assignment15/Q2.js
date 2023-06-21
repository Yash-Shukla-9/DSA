// given

function findNearestSmallerElements(a) {
  const stack = [];
  const result = [];

  for (let i = 0; i < a.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }

    stack.push(a[i]);
  }

  return result;
}

const a = [4, 6, 2, 3, 1, 5];

const nearestSmallerElements = findNearestSmallerElements(a);
console.log(nearestSmallerElements);

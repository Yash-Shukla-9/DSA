// given Input: n = 5
// Output: 2

function arrangeCoins(n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let curr = (mid * (mid + 1)) / 2;

    if (curr === n) {
      return mid;
    } else if (curr < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

const n = 5;
const completeRows = arrangeCoins(n);
console.log(completeRows);

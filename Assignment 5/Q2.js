// given Input: n = 5
// Output: 2

const n = 5;

function countCompleteRows(n) {
  let rows = 0;
  let totalCoins = 0;

  while (totalCoins + rows + 1 <= n) {
    rows++;
    totalCoins += rows;
  }

  return rows;
}

const completeRows = countCompleteRows(n);
console.log(completeRows);

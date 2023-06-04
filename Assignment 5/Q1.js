// given Input: original = [1,2,3,4], m = 2, n = 2
// Output: [[1,2],[3,4]]

const original = [1, 2, 3, 4];
const m = 2;
const n = 2;

function convertTo2DArray(original, m, n) {
  const length = original.length;

  if (m * n !== length) {
    return [];
  }

  const result = [];

  for (let i = 0; i < m; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      const index = i * n + j;
      row.push(original[index]);
    }

    result.push(row);
  }

  return result;
}

const result = convertTo2DArray(original, m, n);
console.log(result);

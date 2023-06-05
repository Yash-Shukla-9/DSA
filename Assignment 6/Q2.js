// given Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;

function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let row = 0;
  let col = n - 1;

  while (row < m && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }

  return false;
}

const result = searchMatrix(matrix, target);
console.log(result);

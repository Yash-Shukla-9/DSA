// give Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[1,4,7],[2,5,8],[3,6,9]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposedMatrix = [];

  for (let j = 0; j < cols; j++) {
    const row = [];
    for (let i = 0; i < rows; i++) {
      row.push(matrix[i][j]);
    }
    transposedMatrix.push(row);
  }

  return transposedMatrix;
}

const transposed = transposeMatrix(matrix);
console.log(transposed);

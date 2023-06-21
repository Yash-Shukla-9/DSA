// given

function findMaxAbsoluteDifference(arr) {
  const n = arr.length;
  const leftSmaller = new Array(n);
  const rightSmaller = new Array(n);

  for (let i = 0; i < n; i++) {
    leftSmaller[i] = 0;
    rightSmaller[i] = 0;
  }

  for (let i = 1; i < n; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j] >= arr[i]) {
      j = leftSmaller[j];
    }
    leftSmaller[i] = j;
  }

  for (let i = n - 2; i >= 0; i--) {
    let j = i + 1;
    while (j < n && arr[j] >= arr[i]) {
      j = rightSmaller[j];
    }
    rightSmaller[i] = j;
  }

  let maxDiff = 0;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

const arr1 = [2, 1, 8];
console.log("Array:", arr1);
console.log("Max Absolute Difference:", findMaxAbsoluteDifference(arr1));

const arr2 = [2, 4, 8, 7, 7, 9, 3];
console.log("Array:", arr2);
console.log("Max Absolute Difference:", findMaxAbsoluteDifference(arr2));

const arr3 = [5, 1, 9, 2, 5, 1, 7];
console.log("Array:", arr3);
console.log("Max Absolute Difference:", findMaxAbsoluteDifference(arr3));

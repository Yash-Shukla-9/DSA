// given

function mergeSortedArrays(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  merged.sort((a, b) => a - b);
  return merged;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));

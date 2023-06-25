// gievn

function countSmaller(nums) {
  const counts = new Array(nums.length).fill(0);
  const sorted = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    const index = findIndex(sorted, num);
    counts[i] = index;
    sorted.splice(index, 0, num);
  }

  return counts;
}

function findIndex(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

const nums = [5, 2, 6, 1];
console.log(countSmaller(nums));

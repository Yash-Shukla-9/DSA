// given

function sortArray(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (nums[i] <= pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...sortArray(left), pivot, ...sortArray(right)];
}

const nums = [5, 2, 9, 1, 3];
console.log(sortArray(nums));

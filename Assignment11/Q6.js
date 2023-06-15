// given Input: nums = [3,4,5,1,2]
// Output: 1

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] < nums[right]) {
    return nums[left];
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

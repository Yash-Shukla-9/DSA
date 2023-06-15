// given Input: nums = [1,2,3,1]
// Output: 2

const findPeakElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(findPeakElement([1, 2, 3, 1]));

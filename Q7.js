// given Input: nums = [1,2,2,3] Output: true

const nums = [1, 2, 2, 3];

const isMonotonic = (nums) => {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) increasing = false;
    if (nums[i] > nums[i - 1]) decreasing = false;
  }

  return increasing || decreasing;
};

const result = isMonotonic(nums);

console.log(result);

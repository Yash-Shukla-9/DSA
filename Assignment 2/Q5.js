// given Input: nums = [1,2,3] Output: 6

const nums = [1, 2, 3];

function maximumProduct(nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const product2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(product1, product2);
}

const result = maximumProduct(nums);

console.log(result);

// given Input: nums = [2,2,1] Output: 1

const singleNumber = (nums) => nums.reduce((acc, num) => acc ^ num, 0);

const nums = [2, 2, 1];
const result = singleNumber(nums);
console.log(result);

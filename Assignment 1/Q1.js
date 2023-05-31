// given - Input: nums = [2,7,11,15],  target = 9  Output0 [0,1]

const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(num, target) {
  const Nums = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - num[i];

    if (Nums.has(complement)) {
      return [Nums.get(complement), i];
    }

    Nums.set(nums[i], i);
  }

  return [];
}

const result = twoSum(nums, target);

console.log(result);

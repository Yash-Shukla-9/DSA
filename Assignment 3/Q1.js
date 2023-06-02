// given Input: nums = [-1,2,1,-4], target = 1 Output: 2

const nums = [-1, 2, 1, -4];
const target = 1;

function threeSumClosest(nums, target) {
  let closestSum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
      }
    }
  }

  return closestSum;
}

const result = threeSumClosest(nums, target);
console.log(result);

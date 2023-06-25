// given

function maximumGap(nums) {
  if (nums.length < 2) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let maxGap = 0;
  for (let i = 1; i < nums.length; i++) {
    maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
  }

  return maxGap;
}

const nums = [3, 6, 9, 1];
console.log(maximumGap(nums));
// Output: 3

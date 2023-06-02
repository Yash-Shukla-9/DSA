// given Input: nums = [1,2,3] Output: [1,3,2]

const nums = [1, 2, 3];

function Permutation(nums) {
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  nums.splice(i + 1);
  nums.reverse();
}

Permutation(nums);
console.log(nums);

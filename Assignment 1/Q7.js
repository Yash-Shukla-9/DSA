// given nput: nums = [0,1,0,3,12] Output: [1,3,12,0,0]

const nums = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIdx] = nums[i];
      index++;
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
}
moveZeroes(nums);
console.log(nums);

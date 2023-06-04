// given Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3];

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

function findDuplicates(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);

    if (nums[num - 1] < 0) {
      result.push(num);
    } else {
      nums[num - 1] *= -1;
    }
  }

  return result;
}

const duplicates = findDuplicates(nums);
console.log(duplicates);

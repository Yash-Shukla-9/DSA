// given

function pushZerosToEnd(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }

  return nums;
}

const nums = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
console.log(pushZerosToEnd(nums));

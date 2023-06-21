// given

function addOneToArray(nums) {
  let carry = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    let sum = nums[i] + carry;
    if (sum < 10) {
      nums[i] = sum;
      carry = 0;
      break;
    } else {
      nums[i] = sum % 10;
    }
  }

  if (carry === 1) {
    nums.unshift(1);
  }

  return nums;
}

// Example 1
const nums1 = [4, 5, 6];
const updatedNums1 = addOneToArray(nums1);
const result1 = updatedNums1.join("");

console.log(result1);

// given
// Input: nums = [3,2,3]
// Output: 3

function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

// Example usage:
const nums = [2, 2, 1, 1, 1, 2, 2];
const majority = majorityElement(nums);
console.log("Array:", nums);
console.log("Majority Element:", majority);

// given Input: nums = [0,1]
// Output: 21

const nums = [0, 1];

function findMaxLength(nums) {
  const countMap = new Map();
  countMap.set(0, -1);
  let maxLength = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;

    if (countMap.has(count)) {
      maxLength = Math.max(maxLength, i - countMap.get(count));
    } else {
      countMap.set(count, i);
    }
  }

  return maxLength;
}

const maxLength = findMaxLength(nums);
console.log(maxLength);

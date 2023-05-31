// Given Input: nums = [1,2,2,4] Output: [2,3]

const nums = [1, 2, 2, 4];
function findErrorNums(nums) {
  const n = nums.length;
  const countMap = {};
  let duplicate, missing;

  for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (let i = 1; i <= n; i++) {
    if (!countMap[i]) {
      missing = i;
    } else if (countMap[i] === 2) {
      duplicate = i;
    }
  }

  return [duplicate, missing];
}

const result = findErrorNums(nums);

console.log(result);

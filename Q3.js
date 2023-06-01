// given Input: nums = [1,3,2,2,5,2,3,7] Output: 5
const nums = [1, 3, 2, 2, 5, 2, 3, 7];

function findLHS(nums) {
  const numCount = {};
  let longsq = 0;

  for (let num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (let num in numCount) {
    if (numCount[+num + 1]) {
      const subsequenceLength = numCount[num] + numCount[+num + 1];
      longsq = Math.max(longsq, subsequenceLength);
    }
  }

  return longsq;
}

const result = findLHS(nums);

console.log(result);

// given input: nums = [1], k = 0 Output: 0

const nums = [1];
const k = 0;

function minimumScore(nums, k) {
  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);

  if (minNum + k >= maxNum - k) {
    return 0;
  } else {
    return maxNum - k - (minNum + k);
  }
}

console.log(minimumScore(nums, k));

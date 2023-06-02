// given Input: nums = [0,1,3,50,75], lower = 0, upper = 99  Output: [[2,2],[4,49],[51,74],[76,99]]

const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;

function findMissingRanges(nums, lower, upper) {
  const ranges = [];

  let prev = lower - 1;
  for (let num of nums) {
    if (num - prev > 1) {
      ranges.push(getRange(prev + 1, num - 1));
    }
    prev = num;
  }

  if (upper - prev > 0) {
    ranges.push(getRange(prev + 1, upper));
  }

  return ranges;
}

function getRange(start, end) {
  return start === end ? [start] : [start, end];
}

const result = findMissingRanges(nums, lower, upper);
console.log(result);

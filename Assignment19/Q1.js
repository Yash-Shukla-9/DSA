// given

function lengthOfLIS(nums) {
  const dp = [];

  for (const num of nums) {
    const idx = binarySearch(dp, num);
    if (idx === dp.length) {
      dp.push(num);
    } else {
      dp[idx] = num;
    }
  }

  return dp.length;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
// Output: 4

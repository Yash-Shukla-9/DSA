// given Input: nums = [-1,0,3,5,9,12], target = 9 Output: 4

function search(nums, target) {
  return nums.indexOf(target);
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = search(nums, target);

console.log(result);

// given Input: nums = [3,2,2,3], val = 3  Output: 2, nums = [2,2,_*,_*]
const nums = [3, 2, 2, 3];
const val = 3;

function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
const result = removeElement(nums, val);

console.log(result);
console.log(nums.slice(0, result));

// given Input: nums = [1,3,5,6], target = 5 Output: 2

const nums = [1, 3, 5, 6];
const target = 5;
function searchInsert(nums, target) {
  let index = 0;

  while (index < nums.length && nums[index] < target) {
    index++;
  }

  return index;
}

const index = searchInsert(nums, target);
console.log(index);

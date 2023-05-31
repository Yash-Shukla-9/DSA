// given input: nums = [1,2,3,1] Output: true

const nums = [1, 2, 3, 1];

function containsDuplicate(nums) {
  const numSet = new Set();

  for (let num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

const result = containsDuplicate(nums);

console.log(result);

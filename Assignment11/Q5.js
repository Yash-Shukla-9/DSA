// given Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  for (const num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));

// given Input: nums1 = [1,2,3], nums2 = [2,4,6];

// Output: [[1,3],[4,6]]

function findDisjointIntegers(nums1, nums2) {
  const distinctNums1 = new Set(nums1);
  const distinctNums2 = new Set(nums2);

  const result = [
    Array.from(distinctNums1).filter((num) => !distinctNums2.has(num)),
    Array.from(distinctNums2).filter((num) => !distinctNums1.has(num)),
  ];

  return result;
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const disjointIntegers = findDisjointIntegers(nums1, nums2);
console.log(disjointIntegers);

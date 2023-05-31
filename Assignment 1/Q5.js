// given input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  Output: [1,2,2,3,5,6

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

function merge(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
}

merge(nums1, m, nums2, n);
console.log(nums1);

// givem  Input: nums1 = [5,3,4,2], nums2 = [4,2,2,5]
// Output: 40

function minProductSum(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);

  return nums1.reduce((sum, num, i) => sum + num * nums2[i], 0);
}

const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
const result = minProductSum(nums1, nums2);
console.log(result);

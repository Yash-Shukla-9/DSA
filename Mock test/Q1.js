//given Q -  Move Zeroes

function moveZeros(nums) {
  const nonZeroElements = [];
  let zeroCount = 0;

  for (let num of nums) {
    if (num !== 0) {
      nonZeroElements.push(num);
    } else {
      zeroCount++;
    }
  }

  while (zeroCount > 0) {
    nonZeroElements.push(0);
    zeroCount--;
  }

  return nonZeroElements;
}

// test 1
const nums1 = [0, 1, 0, 3, 12];
console.log(moveZeros(nums1));
// test 2
const nums2 = [0];
console.log(moveZeros(nums2));

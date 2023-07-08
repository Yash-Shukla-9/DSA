// given
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const currentChar = s[right];

    if (!charSet.has(currentChar)) {
      charSet.add(currentChar);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }

  return maxLength;
}

const input = "abcabcbb";
const length = lengthOfLongestSubstring(input);
console.log("Input:", input);
console.log("Length of Longest Substring:", length);

// given
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  const result = Array.from(map.values());

  return result;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(strs);
console.log("Input:", strs);
console.log("Grouped Anagrams:", groupedAnagrams);

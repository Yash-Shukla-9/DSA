// given Input: s = "abcdefg", k = 2
// **Output:** "bacdfeg"

function reverseStr(s, k) {
  let result = "";

  for (let i = 0; i < s.length; i += 2 * k) {
    const substring = s.slice(i, i + k);
    const reversedSubstring = substring.split("").reverse().join("");
    result += reversedSubstring + s.slice(i + k, i + 2 * k);
  }

  return result;
}

const s = "abcdefg";
const k = 2;
console.log(reverseStr(s, k));

// given Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

const chars = ["a", "a", "b", "b", "c", "c", "c"];

function compress(chars) {
  let count = 1;
  let result = "";

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      result += chars[i];
      if (count > 1) {
        result += count.toString();
      }
      count = 1;
    }
  }

  chars.splice(0, chars.length, ...result.split(""));

  return chars.length;
}

console.log(compress(chars));
console.log(chars.slice(0, 6));

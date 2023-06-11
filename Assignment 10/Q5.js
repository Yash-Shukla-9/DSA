// given

function countSubstrings(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let j = i;

    while (j < s.length) {
      if (s[i] === s[j]) {
        count++;
      }
      j++;
    }
  }

  return count;
}

// Example usage
console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
console.log(countSubstrings("abca"));

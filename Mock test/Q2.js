// given Q -First Unique Character in a String

function firstUniqueChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
}

const s1 = "yash";
console.log(firstUniqueChar(s1)); // Output: 0

const s2 = "yash shukla";
console.log(firstUniqueChar(s2));

const s3 = "hello";
console.log(firstUniqueChar(s3));

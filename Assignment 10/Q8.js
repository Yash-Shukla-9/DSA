//
function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (!vowels.includes(char) && char >= "a" && char <= "z") {
      count++;
    }
  }

  return count;
}

// Example usage
console.log(countConsonants("Hello World"));
console.log(countConsonants("OpenAI"));
console.log(countConsonants("aAbBcCdDeEfF"));

function reverseString(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    stack.push(S[i]);
  }

  let reversedString = "";

  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
}

const str = "Hello, World!";
console.log("Original String:", str);
const reversedStr = reverseString(str);
console.log("Reversed String:", reversedStr);

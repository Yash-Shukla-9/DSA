// given Input: s = "ab#c", t = "ad#c"
// Output: true

const s = "ab#c";
const t = "ad#c";
function backspaceCompare(s, t) {
  const processString = (str) => {
    const stack = [];
    for (let char of str) {
      if (char !== "#") {
        stack.push(char);
      } else {
        stack.pop();
      }
    }
    return stack.join("");
  };

  return processString(s) === processString(t);
}

console.log(backspaceCompare(s, t));

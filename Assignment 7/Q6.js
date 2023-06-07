// given Input: s = "abcde", goal = "cdeab"
// Output: true

const s = "abcde";
const goal = "cdeab";
function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  const sConcat = s + s;

  return sConcat.includes(goal);
}

console.log(rotateString(s, goal));

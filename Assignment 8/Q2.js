// given Input: s = "()"
// output true

const s = "()";

function isValid(s) {
  let balance = 0;
  let asterisks = 0;

  for (let c of s) {
    if (c === "(") {
      balance++;
    } else if (c === ")") {
      if (balance > 0) {
        balance--;
      } else if (asterisks > 0) {
        asterisks--;
      } else {
        return false;
      }
    } else if (c === "*") {
      asterisks++;
    }
  }

  return balance <= asterisks;
}

console.log(isValid(s));

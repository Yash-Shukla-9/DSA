// Given a string calculate length of the string using recursion.

function calculateLength(str) {
  if (str === "") {
    return 0;
  }

  return 1 + calculateLength(str.slice(1));
}

console.log(calculateLength("Hello"));
console.log(calculateLength(""));

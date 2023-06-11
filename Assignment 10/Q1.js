// given
//Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*. An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

function isPowerOfThree(n) {
  if (n <= 0) {
    return false;
  }

  const logValue = Math.log10(n) / Math.log10(3);
  return Math.abs(logValue - Math.round(logValue)) < Number.EPSILON;
}

// Example usage
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));

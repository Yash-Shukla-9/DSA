// given

function lastRemaining(n) {
  return findLastRemaining(n, true);
}

function findLastRemaining(n, isLeftToRight) {
  if (n === 1) {
    return 1;
  }

  if (isLeftToRight) {
    return 2 * findLastRemaining(Math.floor(n / 2), false);
  } else {
    if (n % 2 === 0) {
      return 2 * findLastRemaining(Math.floor(n / 2), true) - 1;
    } else {
      return 2 * findLastRemaining(Math.floor(n / 2), true);
    }
  }
}

// Example usage
console.log(lastRemaining(9));
console.log(lastRemaining(5));

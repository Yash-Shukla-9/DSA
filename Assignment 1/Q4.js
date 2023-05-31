// given input: digits = [1,2,3] Output: [1,2,4]

const digits = [1, 2, 3];

function plus(digits) {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  // If we reach here, it means all digits were 9, so we need to add an extra digit
  digits.unshift(1);
  return digits;
}

const result = plus(digits);

console.log(result);

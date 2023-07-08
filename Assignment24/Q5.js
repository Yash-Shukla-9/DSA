//given
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

function nthUglyNumber(n) {
  const uglyNumbers = [1];
  let i2 = 0,
    i3 = 0,
    i5 = 0;

  while (uglyNumbers.length < n) {
    const nextUgly2 = uglyNumbers[i2] * 2;
    const nextUgly3 = uglyNumbers[i3] * 3;
    const nextUgly5 = uglyNumbers[i5] * 5;

    const nextUgly = Math.min(nextUgly2, nextUgly3, nextUgly5);
    uglyNumbers.push(nextUgly);

    if (nextUgly === nextUgly2) i2++;
    if (nextUgly === nextUgly3) i3++;
    if (nextUgly === nextUgly5) i5++;
  }

  return uglyNumbers[n - 1];
}

const n = 10;
const nthUgly = nthUglyNumber(n);
console.log(`The ${n}th Ugly Number is:`, nthUgly);

// given Input: s = "IDID"
// [0,4,1,3,2]

const s = "IDID";

function findPermutation(s) {
  const n = s.length;
  const perm = new Array(n + 1);
  let low = 0;
  let high = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      perm[i] = low++;
    } else {
      perm[i] = high--;
    }
  }

  perm[n] = low;

  const minValue = Math.min(...perm);
  for (let i = 0; i <= n; i++) {
    perm[i] -= minValue;
  }

  return perm;
}

const permutation = findPermutation(s);
console.log(permutation);

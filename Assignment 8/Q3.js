// given Input: word1 = "sea", word2 = "eat"
// Output: 2

const word1 = "sea";
const word2 = "eat";

function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Initialize the table with zeros
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill the table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(minDistance(word1, word2));

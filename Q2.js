// given Input: candyType = [1,1,2,2,3,3] Output: 3

const candyType = [1, 1, 2, 2, 3, 3];

function Candies(candyType) {
  const uniqueCandies = new Set(candyType);
  const maxCandies = candyType.length / 2;

  return Math.min(uniqueCandies.size, maxCandies);
}

const result = Candies(candyType);

console.log(result);

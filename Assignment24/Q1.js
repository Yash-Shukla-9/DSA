// given
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

function romanToInteger(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSymbolValue = romanMap[s[i]];
    const nextSymbolValue = romanMap[s[i + 1]];

    if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
      result -= currentSymbolValue;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}

const romanNumeral = "MCMXCIV";
const integerValue = romanToInteger(romanNumeral);
console.log("Roman Numeral:", romanNumeral);
console.log("Integer Value:", integerValue);

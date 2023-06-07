// given    **Input:** num1 = "11", num2 = "123"
//  **Output:** 134

const num1 = "11";
const num2 = "123";

function addStrings(num1, num2) {
  let carry = 0;
  let result = "";

  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  while (p1 >= 0 || p2 >= 0 || carry > 0) {
    const digit1 = p1 >= 0 ? parseInt(num1[p1]) : 0;
    const digit2 = p2 >= 0 ? parseInt(num2[p2]) : 0;

    const sum = digit1 + digit2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    p1--;
    p2--;
  }

  return result;
}

console.log(addStrings(num1, num2));

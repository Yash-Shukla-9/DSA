// given

function reverseNumberUsingStack(number) {
  const stack = [];
  let reversedNumber = 0;

  while (number !== 0) {
    const digit = number % 10;
    stack.push(digit);
    number = Math.floor(number / 10);
  }

  let placeValue = 1;
  while (stack.length > 0) {
    reversedNumber += stack.pop() * placeValue;
    placeValue *= 10;
  }

  return reversedNumber;
}

const number = 12345;
const reversedNumber = reverseNumberUsingStack(number);
console.log("Number:", number);
console.log("Reversed Number:", reversedNumber);

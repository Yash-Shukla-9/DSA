// given
function evaluatePostfixExpression(S) {
  const stack = [];

  for (let char of S) {
    if (!isNaN(parseInt(char))) {
      stack.push(parseInt(char));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;

      switch (char) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
        default:
          throw new Error("Invalid operator");
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

const postfixExpression = "52+83-*4/";
const result = evaluatePostfixExpression(postfixExpression);
console.log("Postfix Expression:", postfixExpression);
console.log("Result:", result);

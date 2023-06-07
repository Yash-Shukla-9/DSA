// givn  **Input:** num = "69"
// **Output:** true

const num = "69";
function isStrobogrammatic(num) {
  const strobogrammaticMap = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let rotatedNum = "";

  for (let i = num.length - 1; i >= 0; i--) {
    if (!strobogrammaticMap.hasOwnProperty(num[i])) {
      return false;
    }

    rotatedNum += strobogrammaticMap[num[i]];
  }

  return rotatedNum === num;
}

console.log(isStrobogrammatic(num));

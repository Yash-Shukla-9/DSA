// given Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

// Output: 2

const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;

function findDistanceValue(arr1, arr2, d) {
  let distance = 0;

  for (let i = 0; i < arr1.length; i++) {
    let isValid = true;

    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      distance++;
    }
  }

  return distance;
}

const distanceValue = findDistanceValue(arr1, arr2, d);
console.log(distanceValue);

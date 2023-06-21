// given

function findNextGreaterFrequency(arr) {
  const frequencyMap = {};
  const result = [];

  // Count the frequency of each element in the array
  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    let nextGreaterFreqElement = -1;

    // Find the nearest element on the right with a greater frequency
    for (let j = i + 1; j < arr.length; j++) {
      if (frequencyMap[arr[j]] > frequencyMap[arr[i]]) {
        nextGreaterFreqElement = arr[j];
        break;
      }
    }

    result.push(nextGreaterFreqElement);
  }

  return result;
}

// Example usage:
const arr = [1, 1, 2, 3, 4, 2, 1];
const result = findNextGreaterFrequency(arr);
console.log("Input Array:", arr);
console.log("Result:", result);

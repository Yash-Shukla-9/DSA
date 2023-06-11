// given

function subsets(set) {
  const result = [];
  generateSubsets(set, "", 0, result);
  return result;
}

function generateSubsets(set, currentSubset, index, result) {
  if (index === set.length) {
    result.push(currentSubset);
    return;
  }

  generateSubsets(set, currentSubset + set[index], index + 1, result);

  generateSubsets(set, currentSubset, index + 1, result);
}

console.log(subsets("abc"));
console.log(subsets("abcd"));

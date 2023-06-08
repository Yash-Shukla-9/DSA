// given Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
function findAnagrams(s, p) {
  const result = []; // 
  const pFreq = new Map(); 


  for (let char of p) {
    pFreq.set(char, (pFreq.get(char) || 0) + 1);
  }

  let left = 0;


  for (let right = 0; right < s.length; right++) {

    let count = pFreq.get(s[right]);
    if (count !== undefined) {
      pFreq.set(s[right], count - 1);
      if (count - 1 === 0) {
        pFreq.delete(s[right]);
      }
    }


  return result;
}

const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p))

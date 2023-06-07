// given Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
function reverseWords(s) {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));

// Write a function that takes a string as input and returns the string reversed.
//
//   Example:
// Given s = "hello", return "olleh".
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let temp = s.split("");
  if(temp.length<2) return s;
  return temp.reverse().join("");
};

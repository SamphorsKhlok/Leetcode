// Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.
//
//   The input string does not contain leading or trailing spaces and the words are always separated by a single space.
//
//   For example,
//   Given s = "the sky is blue",
// return "blue is sky the".
//
//   Could you do it in-place without allocating extra space?
//
// eulb si yks eht

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let len = s.length-1;
  s.reverse(0, len);

  let start = 0;

  //loop though each word, which detects via space
  for(let i=0; i <= len ; i++){
    if(s[i] ==' '){
      s.reverse(start,i-1);
      start = i+1;
    }
  }

  //last block of word
  s.reverse(start, len);
};

Array.prototype.reverse = function (start, end) {
  while(start < end){
    [this[start], this[end]] = [this[end], this[start]];
    end--;
    start++;
  }
}

module.exports = { reverseWords};

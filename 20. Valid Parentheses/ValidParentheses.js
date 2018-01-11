// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//   The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
// easy question appeared in Facebook , Google, Amazon, Airbrb, Zenefits, Microsoft

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let temp = s.split("");
  //special case
  if(temp.length%2 || temp.length ==0) return false;

  let bucket = [];
  for( let i of temp){
    if(isLeftBracket(i)){
      bucket.push(i);
    }else{
      if(bucket[bucket.length-1] == otherHalf(i)){
        bucket.pop();
      }else{
        return false;
      }
    }
  }

  return bucket.length > 0 ? false : true;
};

function isLeftBracket(i){
  return (i == '(' || i == '{' || i == '[');
};

function otherHalf(i){
  let result = null;
  switch(i){
    case ']':
      result = '[';
      break;
    case '}':
      result = '{';
      break;
    case ')':
      result = '(';
      break;
    default:
      result = '-';
  }

  return result;
};

module.exports = isValid;

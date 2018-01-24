// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

// I dun remember how it roman works, here is the rule set that I got from the internet
// https://www.rapidtables.com/convert/number/how-roman-numerals-to-number.html
// it goes from left to right, hight to low, if there is a lower before a high, then it is a minus
// i.e IV = 1-5 = 4, VI = 5+1 = 6
// I - 1
// V - 5
// X - 10
// L - 50
// C - 100
// D - 500
// M - 1000

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let temp = s.split("");
  let list = [];
  for(let i of temp){
    list.push(getInteger(i));
  }

  //console.log(list);
  let previous  = 0;
  let sum = 0;
  for(let i of list){
    if(i <= previous){
      sum+= i;
    }else{
      sum = sum + i - previous - previous;
    }

    previous = i;
    // console.log(previous);
    // console.log("sum "+sum);
  }

  return sum;
};

function getInteger(n){
  switch(n){
    case 'I':
      return 1;
      break;
    case 'V':
      return 5;
      break;
    case 'X':
      return 10;
      break;
    case 'L':
      return 50;
      break;
    case 'C':
      return 100;
      break;
    case 'D':
      return 500;
      break;
    case 'M':
      return 1000;
      break;
    default:
      return 0
  }
};

module.exports = { romanToInt };

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let counter = 0;
  let negative = false;

  if((dividend < 0 && divisor > 0) ||
    (dividend > 0 && divisor < 0)){
    negative = true;
  }

  if(Math.abs(divisor) > Math.abs(dividend)) return 0;

  while(Math.abs(dividend) > 0){
    if(Math.abs(dividend) > Math.abs(divisor)){
      dividend = Math.abs(dividend) - Math.abs(divisor);
    }else{
      dividend = 0;
    }

    counter++;
    console.log(dividend);
  }

  return negative ? counter*(-1) : counter;

};

module.exports = {divide};



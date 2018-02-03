/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let r = "";
  let s = 0;
  let i = a.length-1;
  let j = b.length-1;

  while(i >= 0 || j>= 0 || s == 1){
    s += i >= 0 ? a[i--] - 0 : 0; // trick here to substract 0 to cast it to number faster than parsInt
    s += j >= 0 ? b[j--] - 0 : 0; // use b[j--] is faster than b.charAt(j--)

    r = s%2 + r;
    s = Math.floor(s/2);
  }

  return r;
};

module.exports = { addBinary }

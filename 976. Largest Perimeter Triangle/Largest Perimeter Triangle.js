/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  let len = A.length;
  if(len < 3) return 0;

  A.sort(function(a,b){
    return a == b ? 0: (a>b? 1:-1);
  });
  console.log(A);
  let check = false;
  let i = A.length-1;
  let a = 0;
  let b = 0;
  let c = 0;
  let p = 0;
  while(i >=2 ){
    console.log(i);
    a = A[i];
    b = A[i-1];
    c = A[i-2];
    p = (a+b+c)/2;
    console.log("p: "+p);
    console.log("a: "+a);
    console.log("b: "+b);
    console.log("c: "+c);
    if(p > Math.max(a,b,c)){
      break;
    }
    i--;
  }

  if(i < 2) return 0;

  return a+b+c;

};

module.exports = {largestPerimeter};

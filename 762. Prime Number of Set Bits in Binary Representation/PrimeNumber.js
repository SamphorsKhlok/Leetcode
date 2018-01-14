/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  let counter = 0;
  while(L <= R){
    let temp = Dec2Bin(L);
    let bin = getBitCount(temp);
    //console.log(bin);
    if(isPrime(bin)){
      counter++;
    }
    L++;
  }
  return counter;
};

function Dec2Bin(n){
  return (n >>> 0).toString(2);
}

function getBitCount(s){
  let counter = 0;
  for(let i=0; i < s.length;i++){
    if(s[i] == 1){
      counter++
    }
  }
  //console.log('bit count'+ counter);
  return counter;
}

function isPrime(n){
  if(n == 1) return false;
  if(n == 2 || n == 3) return true;
  let i = 2;
  while(i < n){
    if(n%i== 0) return false;
    i++;
  }

  //console.log('is Prime' +n);
  return true;
}

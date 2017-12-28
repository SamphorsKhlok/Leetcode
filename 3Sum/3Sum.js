/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length;
  let r = [];
  if(len < 3 ) return r;

  for(let i=0; i < len ; i++){
    for(let j=0; j < len ; j++){
      for(let k=0; k < len ; k++){
        if(k != j && j != i && i!= k
          && nums[k]+ nums[j]+ nums[i] == 0
          && nums[k] >= nums[j] && nums[j] >= nums[i]
        ){
          let temp = [];
          temp.push(nums[i]);
          temp.push(nums[j]);
          temp.push(nums[k]);

          if(!r.length){
            r.push(temp);
          }

          let exist = false;

          for(let i of r){
            if(arrayCompare(i,temp)){
              exist = true;
              break;
            }
          }

          if(!exist){
            r.push(temp);
          }

        }
      }
    }
  }
  //console.log(r);
  return r.sort(sortArr);
};

var arrayCompare = function (ar1,ar2) {
  if(ar1.length != ar2.length) return false;

  for(let i = 0; i < ar1.length ; i++){
    if(ar1[i]!= ar2[i]) return false;
  }

  return true;
}

function sortArr(ar1,ar2){
  if(ar1[0]>ar2[0]) return 1;
  if(ar1[0]<ar2[0]) return -1;

  if(ar1[0] == ar2[0]){
    if(ar1[1]>ar2[1]) return 1;
    if(ar1[1]<ar2[1]) return -1;

    if(ar1[1] == ar2[1]){
      if(ar1[2]>ar2[2]) return 1;
      if(ar1[2]<ar2[2]) return -1;
      return 0;
    }
  }
}

module.exports = {threeSum};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length;
  let r = [];
  if(len < 3 ) return r;
  //nums.sort();

  for(let i=0; i < len ; i++){
    for(let j=0; j < len ; j++){
      for(let k=0; k < len ; k++){

        //it has to be a different element, and sum = 0, element are in order low to high
        if(k != j && j != i && i!= k
          && nums[k]+ nums[j]+ nums[i] == 0
          && nums[k] >= nums[j] && nums[j] >= nums[i]
        ){
          let temp = [];
          temp.push(nums[i]);
          temp.push(nums[j]);
          temp.push(nums[k]);

          // need a first push for empty array
          if(!r.length){
            r.push(temp);
          }

          //to avoid inserting the duplicate answer, need to check first
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
  //need to sort coz the answer are in sort order from low to high
  return r.sort(sortArr);
};

//compare the array to check duplicate, if it java maybe we can use HashTable instead
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

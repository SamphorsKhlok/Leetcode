// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
//
//   For example,
//   Given [100, 4, 200, 1, 3, 2],
//   The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
//
// Your algorithm should run in O(n) complexity.
// Facebook Interview question

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  let len = nums.length;
  let counter = 1;
  let max = 1;

  //spcial case
  if(len == 0) return 0;
  if(len == 1) return 1;

  nums.sort((a,b)=>{
    if(a > b){
      return 1;
    }else if(a < b){
      return -1;
    }else {
      return 0;
    }
  });

  console.log(nums);

  for(let i = 0; i < (len-1); i++){
    if(Math.abs(nums[i+1]-nums[i]) == 1 ){
      counter++;
    }else if (Math.abs(nums[i+1]-nums[i]) == 0){
      //do nothing;
    }else{
      counter = 1;
    }

    if(counter > max){
      max = counter;
    }

    //console.log('current counter '+ counter);
    //console.log('current max '+ max);
  }

  return max;
};

module.exports = {longestConsecutive}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // nums.sort((a,b)=>{
  //     return (a > b ? -1 : (a < b ? 1:0));
  // });
  nums.mergeSort();
  console.log(nums);
  return nums[k-1];
};

Array.prototype.mergeSort = function(){
  return splitAndMerge(this, 0, this.length-1);
};

function merge(arr1, arr2){
  console.log( arr1 +" to merge "+ arr2);
  let len = arr1.length + arr2.length;
  let index  = 0;
  let index1 = 0;
  let index2 = 0;

  let arr = [];
  while(index < len){
    let val1 = arr1[index1] || Number.MAX_SAFE_INTEGER;
    let val2 = arr2[index2] || Number.MAX_SAFE_INTEGER;

    console.log(val1 + val2);
    if(val1 < val2){
      arr[index] = val1;
      index1++;
    }else{
      arr[index] = val2;
      index2++;
    }

    index++;
  }
  console.log(arr);

  return arr;
}

function splitAndMerge(nums, start, end){
  console.log(start +" - "+ end);
  if(start == end) return nums[start];

  let mid = Math.floor((start + end)/2);

  let left = splitAndMerge(nums, start, mid);
  let right = splitAndMerge(nums, mid+1, end);

  return merge(left, right);
}

findKthLargest([3,2,1,5,6,4],2);

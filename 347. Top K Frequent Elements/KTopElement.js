/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//using bucket sort O(n*k)
var topKFrequent = function(nums, k) {
  let map = new Map();

  for(let i of nums){
    if(map.has(i)){
      map.set(i, map.get(i)+1);
    }else{
      map.set(i, 1);
    }
  }

  //magic of bucket, which store freq as its index and list of keys as its list
  let bucket = [];

  for(let [key,value] of map){
    if(bucket[value] == null){
      let list = new Array();
      list.push(key);
      bucket[value] = list;
    }else{
      bucket[value].push(key);
    }
  };

  let result = [];
  let i = nums.length+1;

  while(i >= 0 ){
    if(bucket[i] != null){
      for(let item of bucket[i]){
        if(result.length < k){
          result.push(item);
        }else{
          return result;
        }
      }
    }
    i--;
  }

  return result;
};


//  running time is O(nlog(n))
//  var topKFrequent = function(nums, k) {
//     let map = new Map();

//     for(let i of nums){
//         if(map.has(i)){
//             map.set(i, map.get(i)+1);
//         }else{
//             map.set(i, 1);
//         }
//     }

//     let list = [];

//     for(let [key,value] of map){
//         list.push({
//             'freq': value,
//             'value': key
//         });
//     };

//     //assume that it will be done in O(nlog(n)) because that is merge short can do
//     list.sort((o1, o2)=>{
//         return o1.freq > o2.freq ? -1: (o1.freq < o2.freq? 1: 0);
//     });

//     let result = [];
//     let i = 0;

//     while(i < k){
//         result.push(list[i].value);
//         i++;
//     }

//     return result;
// };

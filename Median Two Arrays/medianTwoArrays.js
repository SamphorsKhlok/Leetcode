// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// let nums1 = [1, 2];
// let nums2 = [3, 4];

let nums1 = [];
let nums2 = [1];

// let nums1 = [1];
// let nums2 = [2,3,4,5,6,7,8,9,10];

// var findMedianSortedArrays = function(nums1, nums2) {
//     let temp = nums1.concat(nums2).sort(function(a,b){
//         if(parseInt(a) > parseInt(b)) return 1;
//         if(parseInt(a) < parseInt(b))
//             return -1;
//         else
//             return 0;
//     });
//     let len = temp.length;
//     console.log(temp);
//     if(len%2){
//         return temp[Math.floor(len/2)];
//     }else{
//         return (temp[len/2] + temp[(len/2)-1])/2;
//     }
// };

//shorter running time

// var findMedianSortedArrays = function(nums1, nums2) {
//     console.time("running time");
//     let result;
//     let temp = [];
//
//     while(nums1.length && nums2.length){
//         if(nums1[0] <= nums2[0]){
//             temp.push(nums1.shift());
//         }else{
//             temp.push(nums2.shift());
//         }
//
//     }
//     //console.log(temp);
//     if(nums1.length) temp = temp.concat(nums1);
//     if(nums2.length) temp = temp.concat(nums2);
//
//     let len = temp.length;
//     //console.log(temp);
//     if(len%2){
//         result = temp[Math.floor(len/2)];
//     }else{
//         result = (temp[len/2] + temp[(len/2)-1])/2;
//     }
//
//     console.timeEnd("running time");
//     return result;
// };

//optimise solution
// var findMedianSortedArrays = function(nums1, nums2) {
//     console.time("running time");
//     let temp = [];
//
//     while(nums1.length && nums2.length){
//         if(nums1[nums1.length-1] >= nums2[nums2.length-1]){
//             temp.push(nums1.pop());
//         }else{
//             temp.push(nums2.pop());
//         }
//
//     }
//     //console.log(temp);
//     if(nums1.length) temp = temp.concat(nums1.reverse());
//     if(nums2.length) temp = temp.concat(nums2.reverse());
//
//     let len = temp.length;
//     //console.log(temp);
//     if(len%2){
//         return temp[len/2];
//     }else{
//         return (temp[len/2] + temp[(len/2)-1])/2;
//     }
// };

// var findMedianSortedArrays = function(nums1, nums2) {
//     console.time("running time");
//     let sumLen = nums1.length + nums2.length;
//     let targetLen = sumLen >>> 1;
//     let loop = targetLen + 1;
//     let i = 0;
//     let j = 0;
//     let x, y;
//
//     while (loop--) {
//         x = y;
//         if (nums1[i] === undefined) {
//             y = nums2[j++]
//         } else if (nums2[j] === undefined) {
//             y = nums1[i++];
//         } else if (nums1[i] < nums2[j]) {
//             y = nums1[i++];
//         } else {
//             y = nums2[j++];
//         }
//     }
//
//     console.timeEnd("running time");
//     return targetLen << 1 === sumLen ? (x + y) / 2 : y;
// };

var findMedianSortedArrays = function(nums1, nums2) {
    console.time("running time");
    let len = nums2.length + nums1.length;
    let index = Math.floor(len/2);
    let pair = true;

    if(len%2){
        pair = false;
    }

    let x1 = 0;
    let x2 = 0;

    let counter = 0;

    while(nums1.length && nums2.length){
        console.log("loop1 ");
        x1 = x2;

        if(nums1[nums1.length-1] > nums2[nums2.length-1]){
            x2 = nums1.pop();
        }else{
            x2 = nums2.pop();
        }

        counter++;

        if((counter-1) == index){
            if(pair){
                return (x2 + x1)/2;
            }else{
                return x2;
            }
        }
    }

    console.log("midway");

    while(nums1.length || nums2.length ){
        //console.log("loop2 ");
        x1 = x2;

        if(nums1.length) x2 = nums1.pop();
        if(nums2.length) x2 = nums2.pop();
        counter++;

        if((counter-1) == index){
            if(pair){
                return (x2 + x1)/2;
            }else{
                return x2;
            }
        }
    }

}

console.log(findMedianSortedArrays(nums1,nums2));
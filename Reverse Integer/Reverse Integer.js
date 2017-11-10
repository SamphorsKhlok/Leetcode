//Given a 32-bit signed integer, reverse digits of an integer.
// Input: 123
// Output:  321

// Input: -123
// Output: -321

// Input: 120
// Output: 21
/**
 * @param {number} x
 * @return {number}
 */

//let x  = 123;
let x  = -123;
//let x = 120;

// var reverse = function(x) {
//      console.time("running");
//     let temp = [];
//     let value = Math.abs(x);
//
//     while(value>0){
//         temp.push(value%10);
//         value = Math.floor(value/10);
//     }
//
//     let result = 0 ;
//     let multiplier = 1;
//
//     while(temp.length){
//         result += temp.pop()*multiplier;
//         multiplier = multiplier * 10;
//     }
//
//     if(x<0){
//         result = (-1) *result;
//     }
//
//     if(result > (Math.pow(2, 31)-1)
//         || result < -(Math.pow(2, 31))){
//         return 0;
//     }
//      console.timeEnd("running");
//     return result;
// };

var reverse = function(x) {
    //console.time("running");

    let value = Math.abs(x);
    let result = 0 ;

    while(value>0){
        result = result*10 + value%10;
        value = Math.floor(value/10);
    }

    if(x<0){
        result = (-1) *result;
    }

    if(result > (Math.pow(2, 31)-1)
        || result < -(Math.pow(2, 31))){
        return 0;
    }

    //console.timeEnd("running");
    return result;
};

//console.log(Math.pow(2, 31) -1);
console.log(reverse(x));

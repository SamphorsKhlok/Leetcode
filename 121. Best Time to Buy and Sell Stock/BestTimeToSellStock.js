// Say you have an array for which the ith element is the price of a given stock on day i.
//
//   If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
//
//   Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
//
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0
//
// In this case, no transaction is done, i.e. max profit = 0.
/**
 * @param {number[]} prices
 * @return {number}
 */

// this method is O(n) since it loops the array once only
// the idea is simple as to find the min and the max profile in one loop

var maxProfit = function(prices) {
  if(!prices.length) return 0;
  let max = 0;
  let min = prices[0];

  for(let i = 1; i < prices.length; i++){
    let current = prices[i];

    if((current > min) && max < (current - min)){
      max = current - min;
    }

    if(prices[i] < min){
      min = prices[i];
    }
  }

  return max;
};

// the running time is O(n^2) as it loos twice
// var maxProfit = function(prices) {
//   let max = 0;
//   for(let i = 0; i < prices.length; i++){
//     for(let j = i+1; j < prices.length; j++){
//       if(prices[i] < prices[j] && (max < (prices[j] - prices[i]))){
//         max = (prices[j] - prices[i]);
//       }
//     }
//   }
//
//   return max;
// };

module.exports = { maxProfit };


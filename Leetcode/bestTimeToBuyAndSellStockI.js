// 121. Best Time to Buy and Sell Stock
// Easy

// 2365

// 115

// Favorite

// Share
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxprofit = 0;

  for(let i = 0; i < prices.length; i++) {
    for(let j = i+1; j < prices.length; j++) {
      if(prices[j] - prices[i] > maxprofit) {
          maxprofit = prices[j] - prices[i];
          console.log(maxprofit);
      }
    }
  }
  return maxprofit;
};

// Using one pass solution -- BAHUT JADA TEZ SOLUTION O(N)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = Infinity;
    let maxprofit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minprice) {
            minprice = prices[i];
        } else if(prices[i] -  minprice > maxprofit) {
            maxprofit = prices[i] - minprice;
        }
    }
    return maxprofit;
};

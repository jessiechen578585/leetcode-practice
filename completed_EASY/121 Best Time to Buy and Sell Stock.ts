// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.




function maxProfit(prices: number[]): number {
    let max: number = 0
    for (let i = 0; i < prices.length; i++) {
        let buy_price: number = prices[i] ?? 0;
        // console.log("buy_price ", buy_price)
        for (let j = i + 1; j < prices.length; j++) {
            let sell_price: number = prices[j] ?? 0;
            // console.log("sell_price ", sell_price)
            let diff: number = sell_price - buy_price
            if (diff > max) {
                max = diff
                // console.log("max ", max)
            }
        }
    }
    return max

};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))

// chatgpt: 
// function maxProfit(prices: number[]): number {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (const price of prices) {
//     // update minimum buying price
//     if (price < minPrice) {
//       minPrice = price;
//     } else {
//       // calculate profit if sold today
//       maxProfit = Math.max(maxProfit, price - minPrice);
//     }
//   }

//   return maxProfit;
// }

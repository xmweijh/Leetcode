/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const len = prices.length;
    const dp = new Array(len).fill(0).map(x => new Array(2*k+1).fill(0));
    for(let i = 1; i<2*k+1; i+=2) {
        dp[0][i] = -prices[0];
    }
    for(let i = 1; i< len; i++) {
        for(let j=1; j<2*k+1; j+=2) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j-1] - prices[i]);
            dp[i][j+1] = Math.max(dp[i - 1][j+1], dp[i - 1][j] + prices[i]);
        }
    }
    return dp[len - 1][2*k];
};

let k = 2, prices = [3,2,6,5,0,3]
console.log(maxProfit(k, prices))
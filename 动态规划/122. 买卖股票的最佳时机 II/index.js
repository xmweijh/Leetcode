/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length
    // dp[i][0]代表不持有股票的利润，dp[i][1]代表持有股票的利润
    let dp = new Array(len).fill([0,0])
    dp[0] = [0, -prices[0]]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i])
    }

    return dp[len-1][0]
};

console.log(maxProfit([7,1,5,3,6,4]))
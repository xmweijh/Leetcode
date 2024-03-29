/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心
var maxProfit = function(prices) {
    let maxP = 0
    let min = prices[0]
    for(let i = 1; i < prices.length; i++) {
        maxP = prices[i]-min > maxP ? prices[i]-min : maxP
        min = prices[i]<min? prices[i]:min
    }
    return maxP
};

// 动态规划
const maxProfit2 = prices => {
    const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);
    // dp数组初始化
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        dp[i] = [
            Math.max(dp[i - 1][0], -prices[i]),
            Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
        ];
    }
    return dp[len - 1][1];
};

console.log(maxProfit([1,2]))
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 为了更直观 索引号与值对应
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1

    for(let i = 3; i <= n; i++) {
        for(let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
        }
    }
    return dp[n]
};

console.log(integerBreak(10))
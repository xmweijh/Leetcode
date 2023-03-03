/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp= new Array(n+1)
    dp[0] = 1, dp[1] = 1
    for(let i=2; i<=n; i++) {
        let tmp = dp[1]
        dp[1] = dp[1] + dp[0] 
        dp[0] = tmp
    }
    return dp[1]
};

console.log(climbStairs(3))
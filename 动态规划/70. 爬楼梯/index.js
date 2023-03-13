/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     let dp= new Array(n+1)
//     dp[0] = 1, dp[1] = 1
//     for(let i=2; i<=n; i++) {
//         let tmp = dp[1]
//         dp[1] = dp[1] + dp[0] 
//         dp[0] = tmp
//     }
//     return dp[1]
// };

// 背包问题解决
var climbStairs = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1, dp[1] = 1
    let nums = [1, 2]
    for( let i=2; i<=n; i++) {
        for(let j=0; j<nums.length; j++) {
            dp[i] += dp[i-nums[j]]
        }
    }
    return dp[n]
};


console.log(climbStairs(2))
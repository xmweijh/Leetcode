/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp=[cost[0],cost[1]];
    for (let i=2; i<cost.length; i++) {
        let tmp = dp[1];
        dp[1] = Math.min(dp[0], dp[1])+cost[i];
        dp[0] = tmp;
    }
    return Math.min(dp[0], dp[1]);
};

console.log(minCostClimbingStairs([10,15,20]))
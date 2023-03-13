/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    let sum = stones.reduce((s, n) => s + n);

    // 不一能完全消除，取floor得到的是能消除的两堆重量
    let dpLen = Math.floor(sum / 2);
    let dp = new Array(dpLen + 1).fill(0);

    for (let i = 0; i < stones.length; ++i) {
        for (let j = dpLen; j >= stones[i]; --j) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }

    return sum - dp[dpLen] - dp[dpLen];
};
console.log(lastStoneWeightII([2,7,4,1,8,1]))
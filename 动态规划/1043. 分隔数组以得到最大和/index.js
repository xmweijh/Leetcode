/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    const n = arr.length;
    // 转移方程记录前i个的最大值
    const dp = new Array(n).fill(0);

    // 初始化 前k个的最大值为 区间最大值乘以区间长度
    for (let i = 0; i < k; i++) {
        dp[i] = Math.max(...arr.slice(0, i + 1)) * (i + 1);
    }

    for (let i = k; i < n; i++) {
        let maxVal = 0;
        // 子数组不超过k个 所以i所处的可能性也就只有k种
        for (let j = 0; j < k; j++) {
            maxVal = Math.max(maxVal, arr[i - j]);
            dp[i] = Math.max(dp[i], dp[i - j - 1] + maxVal * (j + 1));
        }
    }
    return dp[n - 1];
};

let arr = [1, 15, 7, 9, 2, 5, 10], k = 3
console.log(maxSumAfterPartitioning(arr, k));
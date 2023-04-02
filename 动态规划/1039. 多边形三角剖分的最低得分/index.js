/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
    const n = values.length;
    const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            dp[i][j] = Number.MAX_SAFE_INTEGER;
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]);
            }
        }
    }

    return dp[0][n - 1];
};

var minScoreTriangulation2 = function(values) {
    const n = values.length;
    const memo = new Array(n).fill(null).map(() => new Array(n).fill(null));
    
    const dfs = (i, j) => {
        if (j - i < 2) {
            return 0;
        }
        if (memo[i][j] !== null) {
            return memo[i][j];
        }
        let ans = Number.MAX_SAFE_INTEGER;
        for (let k = i + 1; k < j; k++) {
            ans = Math.min(ans, dfs(i, k) + dfs(k, j) + values[i] * values[k] * values[j]);
        }
        memo[i][j] = ans;
        return ans;
    };
    
    return dfs(0, n-1);
};
console.log(minScoreTriangulation2([1, 3, 1, 4, 1, 5]))
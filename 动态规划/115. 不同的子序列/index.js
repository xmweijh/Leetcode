/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const [m, n] = [s.length, t.length]
    const dp = new Array(m+1).fill().map(()=>new Array(n+1).fill(0))
    // 从s前i个中取得空子序列的个数为1，即全部删除
    for(let i = 0; i< m; i++) dp[i][0] = 1

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(s[i-1] === t[j-1]) {
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[m][n]
};

let s = "rabbbit", t = "rabbit"
console.log('numDistinct', numDistinct(s, t));
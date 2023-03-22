/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const [m, n] = [word1.length, word2.length]
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i-1][j-1]+1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    return m+n-2*dp[m][n]
};

let word1 = "leetcode", word2 = "etco"
console.log(minDistance(word1, word2));
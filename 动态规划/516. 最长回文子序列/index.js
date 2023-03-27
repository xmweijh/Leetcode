/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let len = s.length
    const dp = new Array(len).fill().map(() => new Array(len).fill(0))
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (s[i] === s[j]) {
                if(j === i) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2
                }
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][len - 1]
};

let s = "bbbab"
console.log(longestPalindromeSubseq(s))
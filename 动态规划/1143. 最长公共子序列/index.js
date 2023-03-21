/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const len = text1.length
    const len2 = text2.length
    const dp = new Array(len+1).fill().map(()=>new Array(len2+1).fill(0))

    for( let i = 1; i <= len; i++ ) {
        for( let j = 1; j <= len2; j++ ) {
            if ( text1[i-1] === text2[j-1] ) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[len][len2]
};

let text1 = "abcde", text2 = "ace" 
console.log('longestCommonSubsequence', longestCommonSubsequence(text1, text2))
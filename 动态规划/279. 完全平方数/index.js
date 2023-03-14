/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let num = Math.floor(Math.sqrt(n))
    let dp = new Array(n+1).fill(Infinity)
    dp[0] = 0
    for( let i = 1; i <= num; i++ ) {
        // for( let j = i; j <= n; j++ ) {
        //     if(j>=i*i)
        //         dp[j] = Math.min( dp[j], dp[j-(i*i)]+1)
        // }
            for( let j = i*i; j <= n; j++ ) {
                dp[j] = Math.min( dp[j], dp[j-(i*i)]+1)
        }
    }

    return dp[n]
};

console.log(numSquares(12))
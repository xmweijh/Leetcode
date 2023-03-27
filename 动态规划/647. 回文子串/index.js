/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
    let count = 0;
    const len = s.length;
    let dp = new Array(len).fill().map(() => new Array(len).fill(false))

    for(let i = len-1; i >= 0; i--) {
        for(let j = i; j< len; j++) {
            if(s[i] === s[j]) {
                if(i === j) dp[i][j] = true;
                else if(i === j-1) dp[i][j] = true;
                else {
                    dp[i][j] = dp[i+1][j-1]
                }
                if(dp[i][j] === true) count++;
            }
        }
    }
    return count;
}

let s = 'aaa'
console.log(countSubstrings(s));
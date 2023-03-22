/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index1 = 0, index2 = 0

    while(index2 < t.length) {
        if(s[index1] === t[index2]) {
            index1++;
        }      
            index2++;
    }
    return index1 === s.length? true: false
};
// 动态规划
const isSubsequence = (s, t) => {
    // s、t的长度
    const [m, n] = [s.length, t.length];
    // dp全初始化为0
    const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 更新dp[i][j]，两种情况
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    // 遍历结束，判断dp右下角的数是否等于s的长度
    return dp[m][n] === m ? true : false;
};
let s = "", t = ""
console.log('isSubsequence', isSubsequence(s, t));
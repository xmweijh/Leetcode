/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
    let m = str1.length, n = str2.length;
    // dp记录最长公共子序列长度
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 若相等则+1
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let i = m, j = n;
    const result = [];
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result.unshift(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            // 说明在正向迭代dp的时候，str1[i-1]并未作出贡献，也就是说 str1[i-1] 属于 str1 特有的字符 直接插入
            result.unshift(str1[i - 1]);
            i--;
        } else {
            result.unshift(str2[j - 1]);
            j--;
        }
    }
    while (i > 0) {
        result.unshift(str1[i - 1]);
        i--;
    }
    while (j > 0) {
        result.unshift(str2[j - 1]);
        j--;
    }
    return result.join('');
};

let str1 = "abac", str2 = "cab"
console.log(shortestCommonSupersequence(str1, str2));
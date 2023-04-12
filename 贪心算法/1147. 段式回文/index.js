/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function (text) {
        let ans = 0;
        for (let i = 0, j = text.length - 1; i <= j;) {
            let ok = false;
            // k控制子字符串的长度 贪心选取i开头对应最小的尾字符
            for (let k = 1; i + k - 1 < j - k + 1; ++k) {
                if (text.slice(i, i + k) === text.slice(j - k + 1, j + 1)) {
                    ans += 2;
                    i += k;
                    j -= k;
                    ok = true;
                    break;
                }
            }
            // 没找到 则说明无法再细分
            if (!ok) {
                ++ans;
                break;
            }
        }
        return ans;
};

console.log(longestDecomposition("merchant"))
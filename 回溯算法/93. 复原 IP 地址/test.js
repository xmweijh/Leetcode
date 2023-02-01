/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = [];
    let path = [];
    const backTracking = function (s, startIndex) {
        // 一定是4位
        if (path.length > 4) return
        if (startIndex >= s.length) {
            if (path.length === 4)
                res.push(path.join('.'))
            return
        }
        for (let i = startIndex; i < s.length && i < startIndex + 3; i++) {
            // 0 不能是多位数的开头
            if (i > startIndex && s[startIndex] == '0') break
            let tmp = s.slice(startIndex, i + 1)
            // 要满足0-255区间
            if (tmp >= 0 && tmp <= 255) {
                path.push(tmp)
                backTracking(s, i + 1)
                path.pop()
            }
        }
    }
    backTracking(s, 0)
    return res
};

console.log(restoreIpAddresses("101023"))
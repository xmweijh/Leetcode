/**
 * @param {string} s
 * @return {string[][]}
 */
const isLoop = function (s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l++] !== s[r--])
            return false;
    }
    return true;
}
var partition = function (s) {
    let res = [];
    let path = []
    const backTrack = function (s, startIndex) {
        // 所有字符都被划分  将path加入结果
        if (startIndex > s.length - 1) {
            res.push([...path])
        }
        for (var i = startIndex; i < s.length; i++) {
            // 划分当前前i个元素  并判断他们是否是回文 是的话继续划分后续元素
            // 回溯的层数相当于path的位数
            let tempstr = s.slice(startIndex, i + 1)
            if (isLoop(tempstr)) {
                path.push(tempstr);
                backTrack(s, i + 1)
                path.pop()
            }
        }
    }
    backTrack(s, 0)
    return res
};

console.log(partition('aab'))
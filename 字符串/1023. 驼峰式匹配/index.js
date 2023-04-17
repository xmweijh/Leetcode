/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    let n = queries.length
    let res = new Array(n)
    for (let i = 0; i < n; i++) {
        res[i] = true
        // p指向模式串
        let p = 0
        for (let j = 0; j < queries[i].length; j++) {
            // j指向查询串
            let c = queries[i][j]
            if (p < pattern.length && pattern[p] === c) {
                p++
            } else if (c.toUpperCase() === c) {
                // 不匹配且是大写字母 则不可能添加得到 置为flase
                res[i] = false
                break
            }
        }
        // 字符串匹配完  而模式串还有未被匹配的
        if (p < pattern.length) {
            res[i] = false
        }
    }
    return res
};

let queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
console.log(camelMatch(queries, pattern));

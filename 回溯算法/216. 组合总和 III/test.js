/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
    let path = [];

    const backTrack = function (k, n, stratindex) {
        if (k < 0 || 10 - stratindex < k) return
        if (k === 0) {
            if (n === 0) { res.push([...path]) }
            return
        }

        for (let i = stratindex; i <= 9 && i <= n; i++) {
            path.push(i)
            backTrack(k - 1, n - i, i + 1)
            path.pop()
        }
    }

    backTrack(k, n, 1)
    return res
};

console.log(...combinationSum3(3, 7))
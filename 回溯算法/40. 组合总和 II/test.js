/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [];
    let path = [];
    candidates.sort((a, b) => a - b);
    const backTrack = function (candidates, target, stratindex) {
        if (target === 0) {
            res.push([...path])
            return
        }
        if (target < 0) return
        for (let i = stratindex; i < candidates.length; i++) {
            if (i > stratindex && candidates[i] === candidates[i - 1]) continue
            path.push(candidates[i])
            backTrack(candidates, target - candidates[i], i + 1)
            path.pop()
        }
    }

    backTrack(candidates, target, 0)
    return res
};



console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
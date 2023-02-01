/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    let path = [];

    const backTrack = function (candidates, target, stratindex) {
        if (target === 0) {
            res.push([...path])
            return
        }
        if (target < 0) return
        for (let i = stratindex; i < candidates.length; i++) {
            path.push(candidates[i])
            backTrack(candidates, target - candidates[i], i)
            path.pop()
        }
    }

    backTrack(candidates, target, 0)
    return res
};

console.log(combinationSum([2, 3, 6, 7], 7))
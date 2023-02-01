/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = [];
    let path = [];
    const backTrack = function (nums, startIndex) {
        if (path.length > 1)
            res.push([...path]);
        let visited = [];  // 记录本层访问过的节点  不能重复访问 去重
        for (let i = startIndex; i < nums.length; i++) {
            if (path.length && path[path.length - 1] > nums[i] || visited.indexOf(nums[i]) != -1) {
                continue;
            }
            path.push(nums[i]);
            visited.push(nums[i])
            backTrack(nums, i + 1);
            path.pop();
        }
    }
    backTrack(nums, 0)
    return res;
};

console.log(findSubsequences([4, 6, 7, 7]))
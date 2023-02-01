/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    let path = [];
    const backTracing = function (nums, startIndex) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        let visited = [];
        for (let i = startIndex; i < nums.length; i++) {
            if (visited.indexOf(nums[i]) !== -1) continue
            // 因为要交换位置  在copy数组上交换
            let copynum = [...nums]
            //比如当前nums为123  遍历第二个时 把2提前到头元素变为213
            if (i > startIndex) {
                [copynum[i], copynum[startIndex]] = [copynum[startIndex], copynum[i]]
            }
            // 把copy数组的头元素入栈 
            path.push(copynum[startIndex])
            visited.push(copynum[startIndex])
            // 后续对copy数组其他位置执行同样操作
            backTracing(copynum, startIndex + 1)
            path.pop()
        }
    }
    backTracing(nums, 0)
    return res
};

console.log(permuteUnique([1, 1, 2]))
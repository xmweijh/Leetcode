/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b)
    let res = [];
    let path = [];
    const backTrack = function (nums, startIndex) {
        res.push([...path]);
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            path.push(nums[i]);
            backTrack(nums, i + 1);
            path.pop();
        }
    }
    backTrack(nums, 0)
    return res;
};

console.log(subsetsWithDup([1, 2, 2]))
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    let path = [];
    const backTrack = function (nums, startIndex) {
        res.push([...path]);
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            backTrack(nums, i + 1);
            path.pop();
        }
    }
    backTrack(nums, 0)
    return res;
};

console.log(subsets([1, 2, 3]))
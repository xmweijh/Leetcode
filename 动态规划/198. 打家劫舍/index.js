/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp_0 = 0, dp_1 = 0
    for(let i = 0; i < nums.length; i++) {
        let tmp = dp_1
        dp_1 = Math.max(dp_1, dp_0+nums[i])
        dp_0 = tmp
    }
    return dp_1
};

console.log(rob([2,7,9,3,1]))
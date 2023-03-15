/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0]
    return Math.max(rob2(nums.slice(0,nums.length-1)), rob2(nums.slice(1)))
};

var rob2 = function(nums) {
    let dp_0 = 0, dp_1 = 0
    for(let i = 0; i < nums.length; i++) {
        let tmp = dp_1
        dp_1 = Math.max(dp_1, dp_0+nums[i])
        dp_0 = tmp
    }
    return dp_1
};

console.log(rob([1,2,3,1]))
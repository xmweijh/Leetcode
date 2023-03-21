/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const len = nums.length;
    const dp = new Array(len).fill(0);
    dp[0] = nums[0]
    let res =  dp[0]
    for( let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        res = res > dp[i] ? res : dp[i];
    }
    return res
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
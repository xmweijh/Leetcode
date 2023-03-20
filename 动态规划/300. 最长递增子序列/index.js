/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length
    const dp = new Array(len).fill(1)

    for(let i = 0; i < len; i++) {
        for(let j = 0; j <i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    return Math.max(...dp)
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
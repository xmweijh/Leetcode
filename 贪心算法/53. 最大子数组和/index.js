/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let tempMax = -Infinity;
    let totalMax = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        tempMax = Math.max(tempMax+nums[i], nums[i]);
        totalMax = Math.max(totalMax, tempMax)
    }
    return totalMax;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
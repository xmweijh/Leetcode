/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    let even = nums[0], odd = 0;
    for (let i = 1; i < nums.length; i++) {
        even = Math.max(even, odd + nums[i]);
        odd = Math.max(odd, even - nums[i]);
    }
    return even;
};
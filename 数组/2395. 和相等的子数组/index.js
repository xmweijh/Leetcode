/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let sum = new Set()
    for(let i = 1; i < nums.length; i++) {
        let tmp = nums[i] + nums[i-1]
        if(sum.has(tmp)) return true
        sum.add(tmp)
    }
    return false
};

console.log(findSubarrays( [4,2,4]))
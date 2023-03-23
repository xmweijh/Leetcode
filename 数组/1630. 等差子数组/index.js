/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const len  = nums.length
    const lLen = l.length
    const ans = []
    for(let i = 0; i < lLen; i++) {
        ans.push(nums.slice(l[i],r[i]+1).sort((a,b) =>a-b))
    }
    return ans.map((value)=>isArithmetic(value))
};

var isArithmetic = (nums) => {
    if(nums.length<2) return false
    let ari = nums[1]-nums[0]
    for(let i = 2; i < nums.length; i++) {
        if(nums[i]-nums[i-1] !== ari) return false
    }
    return true
}

let nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]
console.log(...checkArithmeticSubarrays(nums, l, r));
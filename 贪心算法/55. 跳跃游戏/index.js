/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true
    // 当前节点所能到达的覆盖范围
    let cover = 0
    for(let i = 0; i <= cover; i++) {
        // 新的覆盖范围
        cover = Math.max(cover, i + nums[i])
        // 若覆盖范围大于数组 则返回true
        if(cover >= nums.length - 1) {
            return true
        }
    }
    // 覆盖范围内节点都无法到达最后 返回false
    return false
};

var canJump2 = function(nums) {
    // 当前能到达的最远地方
    let cover = 0
    for(let i = 0; i < nums.length; i++) {
        // 当前节点已超过能到达的最远地方
        if(i>cover) break
        // 当前节点能否更新最远地方
        cover = Math.max(cover, i+nums[i])
        if(cover>=nums.length-1) return true
    }
    // 走完了所有节点都不能到到最后
    return false
};

console.log(canJump([3,2,1,0,4]))
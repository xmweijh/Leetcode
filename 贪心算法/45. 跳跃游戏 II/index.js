/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length === 1) return 0
    // 记录跳跃次数
    let count = 1
    // 上次跳跃下能到达的距离
    let cover = 0
    // 本次跳跃能到达的距离
    let tmpCover = 0
    for(let i = 0; i <= cover; i++) {
        // 更新本次跳跃的最远距离
        tmpCover = Math.max(tmpCover, i + nums[i])
        // 本次跳跃能到达终点 返回结果
        if(tmpCover>=nums.length-1) 
                return count
        // 上次跳跃下能到达的节点遍历完成
        if(i === cover) {
            // 还没到达结尾 再跳一次
            count+=1
            // 更新上次跳跃次数为本次跳跃能到达的最远距离
            cover = tmpCover
        }
    }
};

console.log(jump([0]))
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0

    let left = 0, right=1
    while(left<height.length-1) {
        if(right>height.length) {
            left++
            right = left+1
        }
        if(height[right]>=height[left]) {
            for(let i=left+1; i<right; i++) {
                res += height[left]-height[i]
            }
            left = right
        }
        right++
    }

    return res
};

console.log(trap([4,2,3]))
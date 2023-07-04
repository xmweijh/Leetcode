/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    nums.map((num) => num.sort((a,b)=>b-a))
    let res = 0;
    for(let j = 0; j < nums[0].length; j++) {
        let max = nums[0][j]
        for(let i = 1; i < nums.length; i++ ) {
            if (nums[i][j] > max) {
                max = nums[i][j]
            }
        }
        res += max
    }
    return res
};
console.log(matrixSum(nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]))
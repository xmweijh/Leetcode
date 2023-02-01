/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let L = 0, R = 0;
    while (R < nums.length) {
        if (nums[R] === 0) {
            R++;
            continue;
        }
        if (nums[L] === 0) {
            nums[L] = nums[R];
            nums[R] = 0;
        }
        L++;
        R++;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]))
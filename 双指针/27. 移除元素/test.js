/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let L = 0, R = nums.length - 1;
    while (L < R) {
        if (nums[L] === val) {
            const tmp = nums[L];
            nums[L] = nums[R];
            nums[R] = tmp;
            R--;
        }
        else {
            L++;
        }
    }
    return L + 1
};

console.log(removeElement([3, 2, 2, 3], 3))
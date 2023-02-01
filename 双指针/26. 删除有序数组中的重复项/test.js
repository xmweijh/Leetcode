/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const length = nums.length;
    if (length < 2) return length
    let L = 0, R = 1;
    while (R < nums.length) {
        if (nums[L] === nums[R]) {
            R++;
        }
        else {
            nums[++L] = nums[R++];
        }
    }
    return L + 1
};

console.log(removeDuplicates([1, 1, 2]))
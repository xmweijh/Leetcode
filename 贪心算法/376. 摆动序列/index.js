/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    let len = nums.length
    if (len < 2) return len
    let res = 1
    let Dvalue = 0
    for (let i = 1; i < len; i++) {
        if (Dvalue==0 && Dvalue + (nums[i] - nums[i - 1]) || Dvalue * (nums[i] - nums[i - 1]) < 0) {
            res += 1
             Dvalue = nums[i] - nums[i - 1]
        }
    }
    return res
};

console.log('wiggleMaxLength', wiggleMaxLength([1,2,2,2,3,4]));
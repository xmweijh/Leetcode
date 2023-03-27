/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(-1);
    for(let i = 0; i < n; i++) {
        let j = (i+1)%n
        while(j !== i) {
            if(nums[j] > nums[i]) {
                res[i] = nums[j];
                break;
            }
            j = (j+1)%n
        }
    }
    return res;
};

console.log(nextGreaterElements([5,4,3,2,1]))
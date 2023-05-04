/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 二分法  mid看是大于一半还是小于一半  说明左边缺少 还是右边缺少
    
    let n = nums.length;
    let l = 0, r = n-1;
    while (l <= r) {
        let mid = l + Math.ceil((r-l)/2);
        if (nums[mid] > mid) {
            r = mid-1
        } else {
            l = mid+1
        }
    } 
    return l
};

console.log(missingNumber([0,2]))
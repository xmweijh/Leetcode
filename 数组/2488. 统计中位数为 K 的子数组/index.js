/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const n = nums.length;
    let kIndex = nums.indexOf(k);

    let ans = 0;
    const counts = new Map();
    counts.set(0, 1);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += sign(nums[i] - k);
        if (i < kIndex) {
            counts.set(sum, (counts.get(sum) || 0) + 1);
        } else {
            // 要满足[i,j]子数组中位数为k  则前j个数组中大于k的 - 前i个数组中大于k的应该为0或者1
            const prev0 = (counts.get(sum) || 0);  // sum[i] = sum[j]
            const prev1 = (counts.get(sum - 1) || 0);   // sum[i] = sum[j]+1
            ans += prev0 + prev1;
        }
    }
    return ans;
}

const sign = (num) => {
    if (num === 0) {
        return 0;
    }
    return num > 0 ? 1 : -1;
};
  
let nums = [3,2,1,4,5], k = 4
console.log(countSubarrays(nums, k))
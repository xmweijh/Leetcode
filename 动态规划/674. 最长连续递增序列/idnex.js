/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    const len = nums.length;
    let result = 1;
    const dp = new Array(len).fill(1);

    for(let i = 1; i < len; i++) {
        if(nums[i] > nums[i-1]) dp[i] = dp[i-1]+1;
        result = result>dp[i] ? result : dp[i];
    }
    return result;
};

// 贪心
const findLengthOfLCIS = (nums) => {
    if(nums.length === 1) {
        return 1;
    }

    let maxLen = 1;
    let curMax = 1;
    let cur = nums[0];

    for(let num of nums) {
        if(num > cur) {
            curMax += 1;   // 连续记录
            maxLen =  Math.max(maxLen, curMax);
        } else { // 不连续，count从头开始
            curMax = 1;
        }
        cur = num;
    }

    return maxLen;
};

console.log(findLengthOfLCIS([1,3,5,4,7]))
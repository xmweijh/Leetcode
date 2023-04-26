/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
    const n = nums.length;
    const s = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        s[i] = s[i - 1] + nums[i - 1];
    }
    let ans = 0, maxSumA = 0, maxSumB = 0;
    for (let i = firstLen + secondLen; i <= n; ++i) {
        maxSumA = Math.max(maxSumA, s[i - secondLen] - s[i - secondLen - firstLen]);
        maxSumB = Math.max(maxSumB, s[i - firstLen] - s[i - firstLen - secondLen]);
        ans = Math.max(ans, Math.max(maxSumA + s[i] - s[i - secondLen],  // 左 a 右 b
            maxSumB + s[i] - s[i - firstLen])); // 左 b 右 a
    }
    return ans;
};

let nums = [0, 6, 5, 2, 2, 5, 1, 9, 4], firstLen = 1, secondLen = 2
console.log(maxSumTwoNoOverlap(nums, firstLen, secondLen));
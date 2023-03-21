/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length
    const dp = new Array(len1+1).fill().map(()=>new Array(len2+1).fill(0))

    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            if(nums1[i-1] === nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    
    return dp[len1][len2]
};

let nums1 = [1,4,2], nums2 = [1,2,4]
console.log('maxUncrossedLines', maxUncrossedLines(nums1, nums2))
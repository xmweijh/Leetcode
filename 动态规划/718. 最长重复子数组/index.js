/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = (A, B) => {
    // A、B数组的长度
    const [m, n] = [A.length, B.length];
    // dp数组初始化，都初始化为0
    const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    // 初始化最大长度为0
    let res = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 遇到A[i - 1] === B[j - 1]，则更新dp数组
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            // 更新res
            res = dp[i][j] > res ? dp[i][j] : res;
        }
    }
    // 遍历完成，返回res
    return res;
};
let nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
console.log('findLength', findLength(nums1, nums2))
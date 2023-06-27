/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    // dp0代表以i结尾未删除，dp1代表以i结尾删除1次
    let dp0 = arr[0], dp1 = 0, res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        dp1 = Math.max(dp0, dp1 + arr[i]);
        dp0 = Math.max(dp0, 0) + arr[i];
        res = Math.max(res, Math.max(dp0, dp1));
    }
    return res;
};
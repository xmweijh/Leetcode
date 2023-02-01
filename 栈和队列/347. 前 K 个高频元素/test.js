/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        numsMap.has(nums[i]) ? numsMap.set(nums[i], numsMap.get(nums[i]) + 1) : numsMap.set(nums[i], 1)
    }
    var arrayObj = Array.from(numsMap);
    arrayObj.sort(function (a, b) { return b[1] - a[1] });
    let res = [];
    for (let i = 0; i < k; i++)
        res.push(arrayObj[i][0])
    return res;
};

console.log(topKFrequent([2, 2, 3, 1, 1, 1, 3], 2))
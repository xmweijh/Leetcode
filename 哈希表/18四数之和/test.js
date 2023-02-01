/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let nums_S = nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < nums_S.length - 3; i++) {
        // 去重i
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let endindex = nums_S.length - 1; endindex > i + 2; endindex--) {
            if (endindex < nums_S.length - 1 && nums[endindex] === nums[endindex + 1]) continue;
            let l = i + 1, r = endindex - 1;
            while (l < r) {
                let sum = nums_S[l] + nums_S[r] + nums_S[i] + nums_S[endindex];
                if (sum > target) { r-- }
                else if (sum < target) l++
                else {
                    res.push([nums_S[i], nums_S[l], nums_S[r], nums_S[endindex]]);
                    // 去重
                    while (l < r && nums[l] == nums[l + 1]) {
                        l++
                    }
                    while (l < r && nums[r] == nums[r - 1]) {
                        r--
                    }
                    l++
                    r--
                }
            }
        }
    }
    return res
};

for (let i of fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11))
    console.log(i)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/** 
 * 每次只移动一位 则只需要注意新加入元素  与最大元素   记录最大值
 * 若新加入元素大于当前最大值  直接更新最大值
 * 否则 看删除的是否是最大元素  不是则不更新
 * 说是的话则又要将窗口内的元素进行对比，有点费时间
 * */

var maxSlidingWindow = function (nums, k) {
    let maxValue = -9999;
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
        if (i + 1 - k === 0) {
            res.push(maxValue)
        }
        if (i + 1 - k > 0) {
            if (nums[i - k] !== maxValue) {
                res.push(maxValue)
                continue
            }
            else {
                let j = i + 1 - k;
                maxValue = nums[j];
                for (j; j <= i; j++) {
                    if (nums[j] > maxValue) {
                        maxValue = nums[j];
                    }
                }
                res.push(maxValue)
            }
        }
    }
    return res
};

console.log(maxSlidingWindow([7, 2, 4], 2))
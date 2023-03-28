#### [剑指 Offer 03. 数组中重复的数字 - 力扣（Leetcode）](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/description/?favorite=xb9nqhhg)

最简单  嵌套两个for

```js
var findRepeatNumber = function(nums) {
    let len = nums.length;
    let left = 0, right = len-1;

    for(left; left < len; left++) {
        right = len-1;
        while(left < right) {
            if(nums[left] === nums[right]) {
                return nums[left]
            }
            right--
        }
    }
};
```

set+遍历  一个for

```js
var findRepeatNumber = function(nums) {
    let len = nums.length;
    const set = new Set();

    for(let i = 0; i < len; i++) {
        if(set.has(nums[i])) {
            return nums[i]
        }
        set.add(nums[i])
    }
};
```

#### [剑指 Offer 04. 二维数组中的查找 - 力扣（Leetcode）](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/?favorite=xb9nqhhg)

两个维度上进行二分？不好确定

旋转后类似于二叉搜索树，牛马了

![image-20230328144001168](剑指offer.assets/image-20230328144001168.png)

```js
var findNumberIn2DArray = function(matrix, target) {
    let m = matrix.length || 0, n = matrix.length===0?0:matrix[0].length
    let i = 0, j = n-1;

    while(i < m && j >= 0) {
        if(matrix[i][j] === target) {
            return true;
        }
        if(matrix[i][j] > target) {
            j--
        } else {
            i++
        }
    }
    return false
};
```


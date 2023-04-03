/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
    // 从右往左找到第一个降序的数
    let i = arr.length - 2;
    while (i >= 0 && arr[i] <= arr[i + 1]) {
        i--;
    }

    if (i < 0) {
        // 数组已经是最小排列，无法进行交换
        return arr;
    }

    // 从右往左找到第一个小于 arr[i] 的数  因为后面都是升序 最先找到的就是最大的数
    let j = arr.length - 1;
    while (j > i && arr[j] >= arr[i] || arr[j] === arr[j-1]) {
        j--;
    }

    // 交换 arr[i] 和 arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];

    return arr;
};

let arr = [3,1,1,3]
console.log(prevPermOpt1(arr));
/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function (stones) {
    stones.sort((a, b) => a - b);
    let n = stones.length;
    let res = new Array(2);
    // 最大值即最多多少空位  一次次跳
    let m1 = stones[n - 2] - stones[0] - n + 2;
    let m2 = stones[n - 1] - stones[1] - n + 2;
    res[1] = Math.max(m1, m2)
    
    // 特殊情况处理 窗口n内部没有空位 只有端口有
    // 这时候需要县移动另一个端口 再移动它 需要2次
    if(!m1 || !m2) {
        res[0] = Math.min(2, res[1])
        return res
    }

    // 最小值为长度为n的窗口最少有多少空位  也就是n-max
    let left = 0, max = 0;
    for(let right = 0; right < n; right++) {
        // 窗口大于n 
        while(stones[right] - stones[left] + 1 > n) {
            left += 1;
        }
        // 窗口n内最多的石头数
        max = Math.max(max, right - left + 1);
    }
    res[0] = n - max;
    return res
};

console.log(numMovesStonesII([6, 5, 4, 3, 10]))
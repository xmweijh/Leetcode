/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    if(n === 0) return '0';
    // k标志正负
    let k = 1;
    const res = [];
    while(n) {
        if(n%2) {
            res.unshift('1');
            // 为1时需要考虑对n的影响 若指数为偶数为正减去1 否则+1 由高位补偿这个-1。
            n -= k;
        } else {
            res.unshift('0');
        }
        // 幂指数为-2 所以一次正 一次符
        k *= -1;
        n /= 2;
    }
    return res.join('');
};

console.log(baseNeg2(2))
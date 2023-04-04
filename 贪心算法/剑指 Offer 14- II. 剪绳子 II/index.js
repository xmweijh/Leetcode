/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if(n<5) return n;

    let res = 1
    while(n > 4) {
        res = (res*3)%(1e9+7)
        n -= 3
    }
    return (res*n)%(1e9+7)
};

console.log(cuttingRope(120))
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
    let n_s = []
    while (n) {
        let tmp = n % 10
        n_s.unshift(tmp)
        n = Math.floor(n / 10)
    }
    let Lindex
    let res = []
    for(let i = n_s.length - 1; i >= 1; i--) {
        if(n_s[i]>=n_s[i-1]) continue
        n_s[i-1]-=1
        Lindex = i
    }
    return Number(n_s.slice(0,Lindex).join('')+'9'.repeat(n_s.length-Lindex))
};

console.log(monotoneIncreasingDigits(1234))
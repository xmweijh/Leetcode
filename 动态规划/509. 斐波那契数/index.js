/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if(n<2) return n

//     return fib(n-1) + fib(n-2)
// };

var fib = function(n) {
    if(n<2) return n
    let dp=[0,1];
    for(let i=2; i<=n; i+=2) {
        dp[0] = dp[0]+dp[1]
        dp[1] = dp[1]+ dp[0]
    }
    if(n%2===0) return dp[0]
    return dp[1]
};


console.log(fib(5))
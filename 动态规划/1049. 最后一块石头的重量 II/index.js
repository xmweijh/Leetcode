/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let max = Math.max(stones)
    let dp = new Array(max).fill(0)
    for(let i = 0; i < dp.length; i++){
        for(let j = max; j >0 ;j--) {
            dp[j] = 
        }
    }
};

console.log(lastStoneWeightII([2,7,4,1,8,1]))
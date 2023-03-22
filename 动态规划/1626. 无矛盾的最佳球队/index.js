/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
    const n = scores.length;
    const players = new Array(n);
    for (let i = 0; i < n; i++) {
        players[i] = { score: scores[i], age: ages[i] };
    }
    // 按照年龄升序排序，年龄相同的按照分数升序排序
    players.sort((a, b) => {
        if (a.age !== b.age) {
            return a.age - b.age;
        }
        return a.score - b.score;
    });
    // dp[i] 表示以第 i 名球员为最后一名球员的最大得分
    const dp = new Array(n).fill(0);
    let maxScore = 0;
    for (let i = 0; i < n; i++) {
        dp[i] = players[i].score;
        for (let j = 0; j < i; j++) {
            // 满足无矛盾条件
            if (players[i].score >= players[j].score || players[i].age === players[j].age) {
                dp[i] = Math.max(dp[i], dp[j] + players[i].score);
            }
        }
        maxScore = Math.max(maxScore, dp[i]);
    }
    return maxScore;
};

let scores = [1,3,7,3,2,4,10,7,5], ages = [4,5,2,1,1,2,4,1,4]
console.log(bestTeamScore(scores, ages));
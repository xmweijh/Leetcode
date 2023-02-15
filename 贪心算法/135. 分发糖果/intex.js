/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    // 记录每个位置分的糖果，糖果最少为1
    let candys = new Array(ratings.length).fill(1)

    // 规则拆分
    // 相邻的学生中，评分高的学生必须获得更多的糖果 等价于 所有学生满足左规则且满足右规则。
    for (let i = 1; i < ratings.length; i++) {
        // 左规则：若当前元素分数大于上一个 则糖果比上一个多1，否则置为1(这里本身就默认为1)
        if (ratings[i] > ratings[i - 1]) {
            candys[i] = candys[i - 1] + 1
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        // 右规则：若当前元素大于后一个 则糖果比后一个多一个 但也要考虑左规则 取两者的大值
        if (ratings[i] > ratings[i + 1]) {
            candys[i] = Math.max(candys[i], candys[i + 1] + 1)
        }
    }

    let count = candys.reduce((a, b) => {
        return a + b
    })
    return count
};

console.log(candy([1, 0, 2]))
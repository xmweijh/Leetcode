/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    // 初始化城市网络秩数组
    const cityRank = new Array(n).fill(0);
    // 初始化记录两城市是否直接相连
    const connerct = new Array(n).fill().map(()=> new Array(n).fill(0))

    // 遍历所有的道路，记录城市的网络秩
    for (const [a, b] of roads) {
        connerct[a][b] = true
        connerct[b][a] = true
        cityRank[a]++
        cityRank[b]++
    }

    // 计算最大网络秩
    let maxRank = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let rank = cityRank[i] + cityRank[j];
            // 两城市之间的直线只记录一次
            if (connerct[i][j]) {
                rank--;
            }
            maxRank = Math.max(maxRank, rank);
        }
    }

    return maxRank;
};

let n = 4, roads =[[0,1],[0,3],[1,2],[1,3]]
console.log(maximalNetworkRank(n, roads))
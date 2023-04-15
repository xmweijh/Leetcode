/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
    let ans = new Array(n).fill(0);
    const G = new Map();
    // 先记录所有节点的邻居节点
    for (let [u, v] of paths) {
        if (!G.has(u)) G.set(u, []);
        if (!G.has(v)) G.set(v, []);
        G.get(u).push(v);
        G.get(v).push(u);
    }
    for (let u = 1; u <= n; u++) {
        // 最多三条路径  四种颜色就够了
        const colors = new Set([1, 2, 3, 4]);
        // 遍历邻居节点的颜色  不能相同
        if(G.get(u)) {
            for (const v of G.get(u)) {
                colors.delete(ans[v-1]);
              }
        }
        ans[u-1] = colors.values().next().value;
      }
      return ans;
};

let n = 1, paths = []
console.log(gardenNoAdj(n, paths));
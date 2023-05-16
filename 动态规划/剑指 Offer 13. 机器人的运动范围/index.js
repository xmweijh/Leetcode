/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function movingCount(m, n, k) {
    function dfs(i, j, si, sj) {
        if (i >= m || j >= n || k < si + sj || visited.has(`${i},${j}`)) return 0;
        visited.add(`${i},${j}`);
        return 1 + dfs(i + 1, j, (i + 1) % 10 ? si + 1 : si - 8, sj) + dfs(i, j + 1, si, (j + 1) % 10 ? sj + 1 : sj - 8);
    }

    let visited = new Set();
    return dfs(0, 0, 0, 0);
}


m = 3, n = 2, k = 17
console.log(movingCount(m, n, k));
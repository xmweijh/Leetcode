/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    let cnt = new Map(); 
    for (let row of matrix) {
        if (row[0]) { // 翻转第一个数为 1 的行
            for (let j = 0; j < row.length; j++) {
                row[j] ^= 1;
            }
        }
        cnt.set(JSON.stringify(row), (cnt.get(JSON.stringify(row)) || 0) + 1);
    }
    return Math.max(...cnt.values());
};
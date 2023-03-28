/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let m = matrix.length || 0, n = matrix.length===0?0:matrix[0].length
    let i = 0, j = n-1;

    while(i < m && j >= 0) {
        if(matrix[i][j] === target) {
            return true;
        }
        if(matrix[i][j] > target) {
            j--
        } else {
            i++
        }
    }
    return false
};
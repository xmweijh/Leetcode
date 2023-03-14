/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
function restoreMatrix(rowSum, colSum) {
    const n = rowSum.length;
    const m = colSum.length;
    const matrix = new Array(n).fill().map(() => new Array(m).fill(0));
    for (let i = 0, j = 0; i < n && j < m;) {
      const val = Math.min(rowSum[i], colSum[j]);
      matrix[i][j] = val;
      rowSum[i] -= val;
      colSum[j] -= val;
      if (rowSum[i] === 0) i++;
      if (colSum[j] === 0) j++;
    }
    return matrix;
  }

let rowSum = [5,7,10], colSum = [8,6,8]
console.log(restoreMatrix(rowSum, colSum))
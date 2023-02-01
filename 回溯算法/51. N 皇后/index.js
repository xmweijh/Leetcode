/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    // 验证改位置是否就可以放
    function isValid(row, col, chessBoard, n) {
        //同列已有皇后，不能放置
        for (let i = 0; i < row; i++) {
            if (chessBoard[i][col] === 'Q') {
                return false
            }
        }
        // 检查左斜线是否有皇后
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chessBoard[i][j] === 'Q') {
                return false
            }
        }
        // 检查右斜线是否有皇后
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (chessBoard[i][j] === 'Q') {
                return false
            }
        }
        // 一行一定只会有一个元素 所以不用判断
        return true
    }

    // 转换结果 每行需要拼接在一起
    function transformChessBoard(chessBoard) {
        let chessBoardBack = []
        chessBoard.forEach(row => {
            let rowStr = ''
            row.forEach(value => {
                rowStr += value
            })
            chessBoardBack.push(rowStr)
        })

        return chessBoardBack
    }

    let result = []
    function backtracing(row, chessBoard) {
        // 当递归到棋盘最底层（也就是叶子节点）的时候，就可以收集结果并返回了
        if (row === n) {
            result.push(transformChessBoard(chessBoard))
            return
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col, chessBoard, n)) {
                chessBoard[row][col] = 'Q'
                backtracing(row + 1, chessBoard)
                chessBoard[row][col] = '.'
            }
        }
    }
    let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
    backtracing(0, chessBoard)
    return result

};

console.log(solveNQueens(4))
var combine = function (n, k) {
    let res = new Array();
    const backtracking = function (path, n, k) {
        if (n < k) {
            return
        }
        if (k === 1) {
            for (let i = 1; i <= n; i++) {
                // 注意数组push之后返回的是length,而不是新的数组，如果不清楚这点，在使用过程中会遇到很大的坑。
                path.push(i)
                // 解构赋值  拷贝一份  不然会存入引用  最后都变为最终的path也就是空
                res.push([...path])
                path.pop()
            }
        }
        for (let i = n; i >= 1; i--) {
            path.push(i)
            backtracking(path, i - 1, k - 1)
            path.pop()
        }
    }
    backtracking([], n, k)
    return res
};

console.log(combine(4, 2))
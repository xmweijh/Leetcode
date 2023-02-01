var binaryTreePaths = function (root) {
    //递归遍历+递归三部曲
    let res = [];
    //1. 确定递归函数 函数参数
    const getPath = function (node, curPath) {
        //2. 确定终止条件，到叶子节点就终止
        if (node.left === null && node.right === null) {
            curPath += node.val;
            res.push(curPath);
            return;
        }
        //3. 确定单层递归逻辑
        curPath += node.val + '->';
        node.left && getPath(node.left, curPath);
        node.right && getPath(node.right, curPath);
    }
    getPath(root, '');
    return res;
};

var binaryTreePaths = function (root) {
    let res = [];
    const findPath = function (node, curPath) {
        // 终止条件 为叶子节点时
        if (!node.left && !node.right) {
            curPath += node.val;
            // 访问到叶子节点直接添加  相当于先加到curPath在回溯
            res.push(curPath);
            return
        }

        curPath += node.val + '->';
        if (node.left) {
            findPath(node.left, curPath, res);
        }
        if (node.right) {
            findPath(node.right, curPath, res);
        }
        return
    }
    findPath(root, '');
    return res
};
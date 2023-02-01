/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    const res = [], queue = [root];
    if (root === null) {
        return res;
    }
    while (queue.length) {
        // 记录当前层级节点数
        const length = queue.length;
        // 记录每层最大值
        let maxLev = -Infinity;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            maxLev = node.val > maxLev ? node.val : maxLev;
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(maxLev);
    }
    return res;
};
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
 * @return {number}
 */
var countNodes = function (root) {
    //利用完全二叉树的特点
    if (root === null) {
        return 0;
    }
    let left = root.left;
    let right = root.right;
    let leftDepth = 0, rightDepth = 0;
    while (left) {
        left = left.left;
        leftDepth++;
    }
    while (right) {
        right = right.right;
        rightDepth++;
    }
    // 完全二叉树如果递归向左遍历的深度等于递归向右遍历的深度，那说明就是满二叉树。用公式计算节点数目
    if (leftDepth == rightDepth) {
        return Math.pow(2, leftDepth + 1) - 1;
    }
    // 否则继续迭代
    return countNodes(root.left) + countNodes(root.right) + 1;
};
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
var sumOfLeftLeaves = function (root) {
    let res = 0;
    const isLeave = function (node, flag) {
        if (!node) return;
        if (!node.left && !node.right && flag) {
            res += node.val;
            return;
        }
        if (node.left) {
            isLeave(node.left, true);
        }
        if (node.right) {
            isLeave(node.right, false)
        }
        return;
    }
    isLeave(root, false)
    return res
};
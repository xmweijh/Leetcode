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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    // 为空返回
    if (!root) return null;
    // 如果root小于最小值  则左侧一定都下于  查看右子树
    if (root.val < low) return trimBST(root.right, low, high);
    // 大于同理 查看左子树
    if (root.val > high) return trimBST(root.left, low, high);
    // 否则两边都查看
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
};
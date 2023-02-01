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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    let newNode = new TreeNode(val)
    if (!root) return newNode
    let tmpNode = root
    while (tmpNode) {
        // 大于则应该在右边
        if (val > tmpNode.val) {
            // 若右节点为空直接插入右节点
            if (!tmpNode.right) {
                tmpNode.right = newNode
                break;
            }
            // 否则继续访问右节点
            tmpNode = tmpNode.right;
        }
        // 小于同理
        else {
            if (!tmpNode.left) {
                tmpNode.left = newNode
                break;
            }
            tmpNode = tmpNode.left
        }
    }
    return root
};
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
var getMinimumDifference = function (root) {
    let res = Infinity
    let preNode = null
    // 中序遍历
    const inorder = (node) => {
        if (!node) return
        inorder(node.left)
        // 更新res
        if (preNode) res = Math.min(res, node.val - preNode.val)
        // 记录前一个节点         
        preNode = node
        inorder(node.right)
    }
    inorder(root)
    return res
}


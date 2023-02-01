/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (!root1 && !root2) return null;
    let newRoot = new TreeNode()
    if (root1 && !root2) {
        newRoot.val = root1.val
        newRoot.left = root1.left
        newRoot.right = root1.right
        return newRoot;
    }
    if (!root1 && root2) {
        newRoot.val = root2.val
        newRoot.left = root2.left
        newRoot.right = root2.right
        return newRoot;
    }
    else {
        newRoot.val = root1.val + root2.val;
        newRoot.left = mergeTrees(root1.left, root2.left)
        newRoot.right = mergeTrees(root1.right, root2.right)
        return newRoot
    }
};
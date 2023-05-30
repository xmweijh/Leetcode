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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const to_deleteSet = new Set(to_delete);
    const roots = [];

    function dfs(root, isRoot) {
        if(!root) return null;
        const deleted = to_deleteSet.has(root.val);
        root.left = dfs(root.left, deleted);
        root.right = dfs(root.right, deleted);
        if(deleted) {
            return null
        } else {
            if(isRoot) {
                roots.push(root)
            }
            return root
        }
    }
    dfs(root, true);
    return roots;
};
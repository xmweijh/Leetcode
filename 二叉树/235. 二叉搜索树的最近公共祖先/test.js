/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const travers = function (root, p, q) {
        if (!root || root.val > p.val && root.val < q.val || p.val === root.val || q.val === root.val) { return root; }
        if (p.val > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        };
        if (q.val < root.val) { return lowestCommonAncestor(root.left, p, q); }
    }
    if (p.val > q.val) {
        [p, q] = [q, p]
    }
    return travers(root, p, q);
}
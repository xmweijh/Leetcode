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
    const map = new Map();
    map.set(p, null);
    map.set(q, null);
    // 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    const travelTree = function (root, p, q) {
        // 2. 确定递归终止条件
        // 因为p，q一定存在  所以p的子节点有q的情况包含在以下
        if (root === null || root === p || root === q) {
            return root;
        }
        // 3. 确定递归单层逻辑
        let left = travelTree(root.left, p, q);
        let right = travelTree(root.right, p, q);
        // 左右都不为空 root子节点有pq
        if (left !== null && right !== null) {
            return root;
        }
        // 找到了一个q  或者p是q的子节点的情况  就返回q
        if (left === null) {
            return right;
        }
        return left;
    }
    return travelTree(root, p, q);
};
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    // 右 中 左 遍历就是降序 就是 记录累计值就行 就是原树中大于或等于 node.val 的值之和
    let tmp = root
    // val记录累计值
    const buildTree = function (node, val) {
        // 空节点 返回累计值
        if (!node) return val;
        // 按照右 中 左 遍历 不断更新累计值
        val = buildTree(node.right, val)
        node.val += val
        val = buildTree(node.left, node.val)
        // 返回遍历后的累计值
        return val
    }
    buildTree(tmp, 0);
    return root
};
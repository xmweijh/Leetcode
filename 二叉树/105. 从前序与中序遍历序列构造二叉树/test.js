/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!inorder.length) return null;
    const rootVal = preorder.shift(); // 从前序遍历的数组中获取中间节点的值， 即数组第一个值  这里已经弹出首元素 后面切分不需要从1开始了
    let rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
    const root = new TreeNode(rootVal); // 创建中间节点
    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex)); // 创建左节点
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1)); // 创建右节点
    return root;
};
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
 * @return {number[]}
 */
var Traversal = function (root, arr) {
    if (root === null) return;
    Traversal(root.left, arr);
    arr.push(root.val);
    Traversal(root.right, arr);
}

var inorderTraversal = function (root) {
    let result = [];
    Traversal(root, result);
    return result;
};

var inorderTraversal = function (root, res = []) {
    const stack = [];
    let cur = root;
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur);
            // 左
            cur = cur.left;
        } else {
            // --> 弹出 中
            cur = stack.pop();
            res.push(cur.val);
            // 右
            cur = cur.right;
        }
    };
    return res;
};
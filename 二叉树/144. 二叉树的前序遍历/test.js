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
    arr.push(root.val);
    Traversal(root.left, arr);
    Traversal(root.right, arr);
}

var preorderTraversal = function (root) {
    let result = [];
    Traversal(root, result);
    return result;
};

var preorderTraversal = function (root, res = []) {
    if (!root) return res;
    const stack = [root];
    let cur = null;
    while (stack.length) {
        cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
};

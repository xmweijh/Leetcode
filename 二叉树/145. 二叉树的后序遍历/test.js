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
    Traversal(root.right, arr);
    arr.push(root.val);
}

var postorderTraversal = function (root) {
    let result = [];
    Traversal(root, result);
    return result;
};

var postorderTraversal = function (root, res = []) {
    if (!root) return res;
    const stack = [root];
    let cur = null;
    do {
        cur = stack.pop();
        res.push(cur.val);
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    } while (stack.length);
    return res.reverse();
};

// 后续遍历：左右中
// 压栈顺序：中右左
var postorderTraversal = function (root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        stack.push(node); // 中
        stack.push(null);
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};
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
 * @return {boolean}
 */
var compare = function (left, right) {
    //终止条件
    if (left !== null && right == null) return false;
    else if (left === null && right !== null) return false;
    else if (left === null && right === null) return true;
    else if (left.val !== right.val) return false;

    // 若左右值相等 继续递归  外部与内部相等
    let outside = compare(left.left, right.right)
    let inside = compare(left.right, right.left)
    return outside && inside
}

var isSymmetric = function (root) {
    if (!root) return true;
    return compare(root.left, root.right)
};
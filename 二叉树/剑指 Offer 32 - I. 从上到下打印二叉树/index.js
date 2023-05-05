/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    const quene = [root];
    const result = [];
    while (quene.length) {
        let tmp = quene.shift();
        result.push(tmp.val);

        tmp.left && quene.push(tmp.left);
        tmp.right && quene.push(tmp.right);
    }
    return result;
};  
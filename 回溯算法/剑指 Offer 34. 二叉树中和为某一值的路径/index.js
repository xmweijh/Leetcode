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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    const result = [];
    const path = [];

    function backTrack(root, target) {
        if(!root) {
            return
        }

        target -= root.val
        path.push(root.val)
        if(target === 0 && !root.left && !root.right) {
            result.push([...path])
        }
        backTrack(root.left, target)
        backTrack(root.right, target)
        path.pop()
    }

    backTrack(root, target);
    return result;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null;
    let maxvalue = -999;
    let maxindex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxvalue) {
            maxvalue = nums[i];
            maxindex = i;
        }
    }
    const root = new TreeNode(maxvalue);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxindex));
    root.right = constructMaximumBinaryTree(nums.slice(maxindex + 1));
    return root;
};
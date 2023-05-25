/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let count = 0;
    let res = 0;
    function dfs(root) {
        if(!root) return
        dfs(root.right)
        count++
        if(count === k) {
           res = root.val
        }
        dfs(root.left)
    }
    dfs(root)
    return res
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const p4 = new TreeNode(4)
const p2 = new TreeNode(2)
const p1 = new TreeNode(1)
p1.right = p2
const p3 = new TreeNode(3)
p3.left = p1
p3.right = p4
kthLargest(p3, 1)


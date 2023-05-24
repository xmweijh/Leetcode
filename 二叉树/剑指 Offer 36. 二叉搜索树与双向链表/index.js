/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (!root) return
    let head = null
    let pre = null

    function dfs(root) {
        if(!root) return

        dfs(root.left)
        if (pre) {
            pre.right = root
            root.left = pre
        } else {
            head = root
        }
        pre = root
        dfs(root.right)
    }

    dfs(root)
    head.left = pre
    pre.right = head
    return head
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!B) return false;
    function isSub(a, b) {
        if (b == null) return true;
        if (a == null) return false;
        if (a.val === b.val) {
            if(isSub(a.left, b.left) && isSub(a.right, b.right))
                return true;
        } 
        return isSub(a.left, B) || isSub(a.right, B);
    }

    return isSub(A, B)
};
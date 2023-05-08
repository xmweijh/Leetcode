/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queen = [root];
    let res = [];
    let deep = 1 
    while(queen.length !== 0) {
        const len = queen.length
        let tmp = []
        for(let i = 0; i<len; i++) {
            let node = queen.shift()
            tmp.push(node.val)
            node.left && queen.push(node.left)
            node.right && queen.push(node.right)
        }
        if(deep %2) {
            res.push(tmp)
        } else {
            res.push(tmp.reverse())
        }
        deep++
    }
    return res
};
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
        node.left && queen.push(node.left)
        node.right && queen.push(node.right)
        if(deep %2 === 0) {
            tmp.unshift(node.val)
        } else {
            tmp.push(node.val)
        }
        }
        deep++
        res.push(tmp)
    }
    return res
};
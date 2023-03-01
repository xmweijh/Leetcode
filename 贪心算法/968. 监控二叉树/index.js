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
 * @return {number}
 */
var minCameraCover = function (root) {
    let result = 0
    // 节点的状态0无覆盖，1摄像头，2被覆盖
    const traverse = (root) => {
        // 空节点认为被覆盖 否则叶子节点就需要安装摄像头
        if(!root) return 2
        // 后序遍历  从头选择只能让头结点摄像头减少 而从尾开始  能让所有叶子节点减少
        let left = traverse(root.left)
        let right = traverse(root.right)

        // 情况1：左右节点都有覆盖		中间节点应该就是无覆盖(其父亲安装摄像头)
        if(left === 2 && right === 2) {
            return 0
        }
        // 情况2：左右节点至少有一个无覆盖的情况       中间节点（父节点）应该放摄像头(否则无覆盖的无法被监控)
        if(left === 0 || right === 0) {
            result++
            return 1
        }
        // 情况3：左右节点至少有一个有摄像头   中间结点   应该是2（覆盖的状态）
        if(left === 1 || right === 1) {
            return 2
        }

        return -1

    }
    if(!traverse(root)) result++
    return result
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


let tree1 = new TreeNode(0)
let tree2 = new TreeNode(0)
let tree3 = new TreeNode(0)
let tree4 = new TreeNode(0)
let tree5 = new TreeNode(0)

tree1.left = tree2
// tree2.left = tree3
tree1.right = tree4

console.log(minCameraCover(tree1))
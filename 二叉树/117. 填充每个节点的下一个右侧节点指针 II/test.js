/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    const queue = [root];
    if (root === null) {
        return root;
    }
    while (queue.length) {
        // 记录当前层级节点数
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (i < length - 1) {
                node.next = queue[0];
            }
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root;
};

var connect = function (root) {
    if (!root) return root;

    let queue = [root]; // 存储当前层级从左至右节点队列

    let nextQueue = [];  // 存储下一个层级从左至右节点队列

    while (queue.length > 0) {
        let node = queue.shift();

        node.left && nextQueue.push(node.left);  // 添加左节点到下一队列
        node.right && nextQueue.push(node.right); // 添加右节点到下一队列

        if (queue.length > 0) { // 设置next
            node.next = queue[0];
        } else { // 交换队列
            node.next = null;
            queue = nextQueue;
            nextQueue = [];
        }

    }

    return root;
};
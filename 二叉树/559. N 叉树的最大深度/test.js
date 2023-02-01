/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    const queue = [root];
    let maxD = 0
    while (queue.length) {
        let len = queue.length;
        maxD += 1
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            for (const child of node.children) {
                queue.push(child);
            }
        }
    }
    return maxD;
};

var maxDepth = function (root) {
    if (!root) return 0;
    let maxD = 0;
    for (const child of root.children) {
        maxD = Math.max(maxD, maxDepth(child));
    }
    return maxD + 1
};
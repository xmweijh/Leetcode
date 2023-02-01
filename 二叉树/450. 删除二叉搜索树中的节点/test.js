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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    // 第一种情况：没找到删除的节点，遍历到空节点直接返回了
    if (!root) return null;
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
        return root;
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
        return root;
    } else {
        // 第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
        if (!root.left && !root.right) {
            return null
        }
        // 第三种情况：其右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
        if (root.left && !root.right) {
            return root.left;
        } // 第四种情况：其左孩子为空，右孩子不为空，删除节点，右孩子补位 ，返回右孩子为根节点
        else if (root.right && !root.left) {
            return root.right;
        }
        // 第五种情况：左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置
        // 并返回删除节点右孩子为新的根节点。
        let tmpNode = root.right
        // 找右子树最左面的节点
        while (tmpNode.left) {
            tmpNode = tmpNode.left;
        }
        // 把要删除的节点左子树放在右子树最左面的节点的左孩子的位置
        tmpNode.left = root.left
        // 返回旧root的右孩子作为新root
        root = root.right
        return root;
    }
};

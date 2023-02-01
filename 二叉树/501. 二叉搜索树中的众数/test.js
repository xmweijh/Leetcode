var findMode = function (root) {
    // 不使用额外空间，使用中序遍历,设置出现最大次数初始值为1
    let count = 0, maxCount = 1;
    let pre = root, res = [];
    // 1.确定递归函数及函数参数
    const travelTree = function (cur) {
        // 2. 确定递归终止条件
        if (cur === null) {
            return;
        }
        travelTree(cur.left);
        // 3. 单层递归逻辑
        if (pre.val === cur.val) {
            count++;
        } else {
            count = 1;
        }
        pre = cur;
        if (count === maxCount) {
            res.push(cur.val);
        }
        if (count > maxCount) {
            res = [];
            maxCount = count;
            res.push(cur.val);
        }
        travelTree(cur.right);
    }
    travelTree(root);
    return res;
};
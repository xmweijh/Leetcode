function createTree(arr) {
    const n = arr.length;
    if (n <= 0 || n % 2 === 0) {
      return null; // 如果节点数小于等于0或为偶数，返回空树
    }
  
    const tree = {
      val: arr[0],
      left: null,
      right: null
    };
  
    let queue = [tree];
    let level = 1;
    let i = 1;
  
    while (queue.length > 0) {
      const size = queue.length;
      let sum = 0;
      for (let j = 0; j < size; j++) {
        const node = queue.shift();
  
        if (level % 2 === 1) { // 奇数层节点
          sum += node.val;
        } else { // 偶数层节点
          sum -= node.val;
        }
  
        if (i < n) {
          node.left = {
            val: arr[i] === -1 ? null : arr[i],
            left: null,
            right: null
          };
          i++;
          if (node.left.val !== null) {
            queue.push(node.left);
          }
  
          node.right = {
            val: arr[i] === -1 ? null : arr[i],
            left: null,
            right: null
          };
          i++;
          if (node.right.val !== null) {
            queue.push(node.right);
          }
        }
      }
      level++;
      if (Math.abs(sum) > 1) { // 如果奇偶层权值和之差的绝对值超过1，返回空树
        return null;
      }
    }

    let result = []
    function traverse(node) {
        if(node === null) {return}

        result.push(node.val);
        traverse(node.left);
        traverse(node.left)
    }
    traverse(tree)
    return result;
  }
  
  const arr = [-1, -1, -1];
  const tree = createTree(arr);
  console.log(tree); // 
  
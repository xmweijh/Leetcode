/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//     let res = 0;
//     for(let i = 0; i < heights.length; i++) {
//         let min = heights[i];
//         for(let j = i; j < heights.length; j++) {
//             if(heights[j]<min) {
//                 min = heights[j];
//             }
//             res = Math.max(res, [j-i+1]*min)
//         }
//     }
//     return res;
// };

var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0,...heights,0]; // 数组头部加入元素0 数组尾部加入元素0
    for(let i = 0; i < heights.length; i++){ // 当前遍历的元素heights[i]小于栈顶元素heights[stack[stack.length-1]]]的情况
        while(heights[i] < heights[stack[stack.length-1]]){// 当前bar比栈顶bar矮
            const stackTopIndex = stack.pop();// 栈顶元素出栈，并保存栈顶bar的索引
            let w = i - stack[stack.length -1] - 1;
            let h = heights[stackTopIndex]
            // 计算面积，并取最大面积
            maxArea = Math.max(maxArea, w * h);
        }
        stack.push(i);// 当前bar比栈顶bar高了，入栈
    }
    return maxArea;
};

let heights = [2,1,5,6,2,3]
console.log(largestRectangleArea(heights))
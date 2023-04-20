/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [];
    let i = 0;
    for (let num of pushed) {
        stack.push(num); // num 入栈
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            // 循环判断与出栈
            stack.pop();
            i += 1;
        }
    }
    return !stack.length;
};

let pushed = [1, 2, 3, 4, 5], popped = [4, 3, 5, 1, 2]
console.log(validateStackSequences(pushed, popped));
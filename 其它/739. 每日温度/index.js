/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const len = temperatures.length
    let res = new Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j - i;
                break;
            }
        }
    }

    return res;
};

// 单调栈
var dailyTemperatures2 = function (temperatures) {
    const len = temperatures.length
    let res = new Array(len).fill(0);
    let stack = [0];
    for (let i = 1; i < len; i++) {
        while (stack.length){
            let tmp = stack.pop()
            if (temperatures[i] > temperatures[tmp]) {
                res[tmp] = i - tmp
            } else {
                stack.push(tmp)
                break
            }
        }
        stack.push(i)
    }

    return res;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures2(temperatures));
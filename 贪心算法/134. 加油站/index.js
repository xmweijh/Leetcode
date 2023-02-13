/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let gap = gas.map((value, index) => value - cost[index]);
    let len = gap.length
    let totalSum = 0
    let curSum = 0
    let startIdx = 0
    for (let i = 0; i < len; i++) {
        totalSum += gap[i]
        curSum += gap[i]
        if (curSum < 0) {
            curSum = 0
            startIdx = i + 1
        }
    }
    return totalSum >= 0 ? startIdx : -1
};

let gas = [5, 1, 2, 3, 4], cost = [4, 4, 1, 5, 1]
console.log(canCompleteCircuit(gas, cost));
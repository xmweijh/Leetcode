/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map = new Map();

    for(let item of nums) {
        if(item%2 === 0) {
            if(map.has(item)) {
                map.set(item, map.get(item) + 1);
            } else {
                map.set(item, 1)
            }
        }
    }
    if(map.size === 0) {
        return -1;
    }
    let res = 0;
    let max = 0;
    map.forEach((value, key) => {
        if(value > max) {
            res = key;
            max = value;
        } else if(value === max && key < res ) {
             res = key;
        }
    })
    return res;
};

console.log(mostFrequentEven([29,47,21,41,13,37,25,7]))
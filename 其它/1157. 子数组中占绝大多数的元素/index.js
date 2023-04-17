/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
    this.arr = arr || [];
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
    let map = new Map();
    for(let i = left; i <= right; i++) {
        if(!map.has(this.arr[i])) {
            map.set(this.arr[i], 1)
        } else {
            map.set(this.arr[i], map.get(this.arr[i])+1)
        }
    }
    let res = [] 
    map.forEach((value, key) => {
        if(value >= threshold) {
            res.push(key)
        }
    })
    return res.length? res : -1
};

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */

majorityChecker = new MajorityChecker([1,1,2,2,1,1]);
console.log(majorityChecker.query(0,3,3))
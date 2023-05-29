/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let k = 0;
    let total = 0;
    for(let item of nums) {
        if(item %6 === 0) {
           total += item
            k++
        }
    }
    return k>0? Math.floor(total/k): 0
};

console.log(averageValue( [1,3,6,10,12,15]))
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    let result = 0;
    function recur(n) {
        n>1 && recur(n-1);
        result += n
    }
    recur(n);
    return result;
};
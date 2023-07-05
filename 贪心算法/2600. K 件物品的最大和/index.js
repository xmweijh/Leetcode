/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let res = 0;
    if(k-numOnes <= 0) {
        return k;
    }
    res += numOnes;
    k -= numOnes;
    if(k-numZeros <= 0) {
        return res;
    }
    k -= numZeros;
    return res - k;
};
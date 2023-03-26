/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    let n = arr.length, j = n - 1;
    while (j > 0 && arr[j - 1] <= arr[j]) {
        j--;
    }
    if (j === 0) {
        return 0;
    }
    let res = j;
    for (let i = 0; i < n; i++) {
        while (j < n && arr[j] < arr[i]) {
            j++;
        }
        res = Math.min(res, j - i - 1);
        if (i + 1 < n && arr[i] > arr[i + 1]) {
            break;
        }
    }
    return res;
};

let arr = [6,3,10,11,15,20,13,3,18,12]
console.log(findLengthOfShortestSubarray(arr));
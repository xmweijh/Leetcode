var sumSubarrayMins = function(arr) {
    let sum = 0;
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let path_min = arr[i];
        for (let j = i; j < len; j++) {
            path_min = Math.min(arr[j], path_min);
            sum += path_min
        }
    }
    return sum;
};
let arr = [3,1,2,4]
console.log(sumSubarrayMins(arr));
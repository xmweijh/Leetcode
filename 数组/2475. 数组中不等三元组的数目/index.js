/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                continue;
            }
            for(let k = j + 1; k < nums.length; k++) {
                if(nums[k] !== nums[j] && nums[k] !== nums[i]) {
                    count++;
                }
            }
        }
    }
    return count;
};

var unequalTriplets = function(nums) {
    nums.sort();
    let res = 0, n = nums.length;
    for (let i = 0, j = 0; i < n; i = j) {
        while (j < n && nums[j] == nums[i]) {
            j++;
        }
        res += i * (j - i) * (n - j);
    }
    return res;
};

console.log(unequalTriplets([4, 4, 2, 4, 3]))
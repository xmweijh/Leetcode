var search = function (nums, target) {
    let L = 0, R = nums.length - 1;
    while (L <= R) {
        const mid = Math.floor((L + R) / 2);
        const num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            R = mid - 1;
        } else {
            L = mid + 1;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length;
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2);
        //if(nums[mid] ==target )
        //    return mid;
        if (nums[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return l
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
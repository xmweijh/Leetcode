var findL = (nums, target) => {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2);
        if (nums[mid] >= target)
            r = mid - 1;
        else
            l = mid + 1;
    }
    console.log(l)
    return l;
}

var searchRange = function (nums, target) {
    l = findL(nums, target);
    r = findL(nums, target + 1);
    if (l < nums.length && nums[l] === target)
        return [l, r - 1]
    else
        return [-1, -1]
};

console.log(searchRange([1], 1))
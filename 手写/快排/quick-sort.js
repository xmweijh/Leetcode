const quickSort = function (nums, start = 0, end = nums.length-1) {
    if(start >= end) return
    const base = nums[start];
    let left = start;
    let right = end;
    while (left < right) {
        while(nums[right] >= base && right > left) {
            right--;
        }
        nums[left] = nums[right];
        while(nums[left] <= base && left < right) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = base;
    quickSort(nums, start, left-1);
    quickSort(nums, left+1, end)
}

let a = [3,1,4,5,1,6,3,2,4]
quickSort(a)
console.log(a)
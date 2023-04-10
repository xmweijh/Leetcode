var exchange = function(nums) {
    let len = nums.length
    let left=0, right = len-1;

    while(left < right) {
        while(nums[left] % 2 !== 0 && left<right) {
            left++;
        } 
        while(nums[right]%2 === 0 && left<right) {
            right--;
        }
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++;
        right--;
    }
    return nums
};

console.log(exchange([1,3,5]))
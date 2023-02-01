class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # 统计目前遇到的0的数目
        zero_num = 0
        n = len(nums) - 1

        for i, val in enumerate(nums):
            if val == 0:
                zero_num += 1
            else:
                if zero_num != 0:
                    nums[i-zero_num] = val
        for i in range(zero_num):
            nums[n] = 0
            n -= 1

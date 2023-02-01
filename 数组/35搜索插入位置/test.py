# 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

class Solution:
    def searchInsert(self, nums, target):
        L = 0
        R = len(nums)-1
        while L <= R:
            mid = (L+R) // 2
            num = nums[mid]
            if num == target:
                return mid
            elif num < target:
                L += 1
            else:
                R -= 1
        return L


solution = Solution()
print(solution.searchInsert([1, 3, 5, 6], 6))

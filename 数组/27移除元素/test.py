# 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
# 设置左右index 若等于val交换 交换后R-1 否则L+1
class Solution:
    def removeElement(self, nums, val):
        L = 0
        R = len(nums) - 1
        while(L <= R):
            tmp = nums[L]
            if tmp == val:
                nums[L], nums[R] = nums[R], nums[L]
                R -= 1
            else:
                L += 1
        return L


solution = Solution()
print(solution.removeElement([3, 2, 2, 3], 3))

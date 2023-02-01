# 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

class Solution:
    def search(self, nums, target):
        L_index = 0
        R_index = len(nums)-1
        # 左开右闭
        while L_index <= R_index:
            M_index = (L_index + R_index) // 2
            num = nums[M_index]
            if num == target:
                return M_index
            elif num > target:
                R_index = M_index - 1
            else:
                L_index = M_index + 1

        return -1

    def search2(self, nums, target):
        L_index = 0
        R_index = len(nums)
        # 左闭右开
        while L_index < R_index:
            M_index = (L_index + R_index) // 2
            num = nums[M_index]
            if num == target:
                return M_index
            elif num > target:
                R_index = M_index
            else:
                L_index = M_index + 1
        return -1


solution = Solution()
print(solution.search([-1, 0, 3, 5, 9, 12], 9))
print(solution.search2([-1, 0, 3, 5, 9, 12], 9))

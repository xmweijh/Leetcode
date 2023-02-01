# 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

# 最简单，左右同时搜索 L=0 R=len(nums) 每轮+-1 直到L>R或者找到  时间复杂度O(n)
class Solution:
    def searchRange(self, nums, target):
        L = 0
        R = len(nums)-1
        result = [-1, -1]
        while L <= R:
            # 左边找到
            if nums[L] == target:
                result[0] = L
            # 右边找到
            if nums[R] == target:
                result[1] = R
            # 找到后不再移动坐标
            if result[0] == -1:
                L += 1
            if result[1] == -1:
                R -= 1
            if result[0] != -1 and result[1] != -1:
                return result

        return result

    # 时间复杂度O(logn)版本
    def searchRange2(self, nums, target):
        # 用两次二分法 找到左右边界 左边界为target 右边界为target+1
        def left_func(nums, target):
            n = len(nums)-1
            left = 0
            right = n
            while(left <= right):
                mid = (left+right)//2
                # 注意这里大于等于都要减一 才能找到最左边的target
                if nums[mid] >= target:
                    right = mid-1
                if nums[mid] < target:
                    left = mid+1
            return left
        a = left_func(nums, target)
        b = left_func(nums, target+1)
        if a == len(nums) or nums[a] != target:
            return [-1, -1]
        else:
            return [a, b-1]


solution = Solution()
print(solution.searchRange2([5, 7, 7, 8, 8, 10], 8))

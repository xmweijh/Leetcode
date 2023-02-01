# 你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
# 快慢指针 左右指针相等 右指针继续右移直到不相等的下一个 然后左指针右移并将右指针数值赋予左指针 右指针继续右移
class Solution:
    def removeDuplicates(self, nums):
        L = 0
        R = 1
        while R < len(nums):
            if nums[L] != nums[R]:
                if R - L > 1:
                    nums[L+1] = nums[R]
                L += 1
            R += 1
        return L+1


solution = Solution()
print(solution.removeDuplicates([1]))

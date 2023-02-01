# 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
# 第一印象 双指针
class Solution:
    def minSubArrayLen(self, target, nums):
        L = 0
        R = 0
        n = len(nums)
        res = n+1
        total = nums[0]
        while L < n:
            if total < target:
                if R < n-1:
                    R += 1
                    total += nums[R]
                else:
                    break
            else:
                res = min(res, R-L+1)
                total = total - nums[L]
                L += 1
        return 0 if res == n+1 else res


solution = Solution()
print(solution.minSubArrayLen(11, [1, 2, 3, 4, 5]))

# 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
import math


class Solution:
    def mySqrt(self, x):
        L = 0
        R = math.ceil(x / 2)
        while L <= R:
            num = (L + R) // 2
            if num * num == x:
                return num
            elif num * num < x:
                L = num + 1
            else:
                R = num - 1
        return L if L < R else R


solution = Solution()
print(solution.mySqrt(8))

import math


class Solution:
    def isPerfectSquare(self, x):
        L = 0
        R = math.ceil(x / 2)
        while L <= R:
            num = (L + R) // 2
            if num * num == x:
                return True
            elif num * num < x:
                L = num + 1
            else:
                R = num - 1
        return False


solution = Solution()
print(solution.isPerfectSquare(3))

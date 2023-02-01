import math


class Solution:
    def generateMatrix(self, n):
        res = [[0]*n for i in range(n)]
        i = 0
        tmp = 1
        while i <= math.ceil(n/2):
            j = i
            while j <= n-i-1:
                res[i][j] = tmp
                tmp += 1
                j += 1
            j = i+1
            while j < n-i-1:
                res[j][n-i-1] = tmp
                tmp += 1
                j += 1
            j = n-i-1
            while j > i:
                res[n-i-1][j] = tmp
                tmp += 1
                j -= 1
            j = n-i-1
            while j > i:
                res[j][i] = tmp
                tmp += 1
                j -= 1
            i += 1
        return res


solution = Solution()
print(solution.generateMatrix(3))

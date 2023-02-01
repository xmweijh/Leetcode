import math


class Solution:
    def spiralOrder(self, List):
        n = len(List[0])
        m = len(List)
        res = []
        i = 0
        total = n*m
        while total > 0 and i <= math.ceil(n/2):
            j = i
            while total > 0 and j <= n-i-1:
                res.append(List[i][j])
                total -= 1
                j += 1
            j = i+1
            while total > 0 and j < m-i-1:
                res.append(List[j][n-i-1])
                total -= 1
                j += 1
            j = n-i-1
            while total > 0 and j > i:
                res.append(List[m-i-1][j])
                total -= 1
                j -= 1
            j = m-i-1
            while total > 0 and j > i:
                res.append(List[j][i])
                total -= 1
                j -= 1
            i += 1
        return res


solution = Solution()
print(solution.spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))

class Solution:
    def totalFruit(self, fruits):
        N = len(fruits)
        if N <= 2:
            return N
        L = 0
        R = 1
        result = 2
        i = R+1
        while i < N:
            if fruits[R] == fruits[L]:
                R += 1
                i += 1
                if i == N:
                    result = i - L if i - L > result else result
                continue
            elif fruits[R] == fruits[i] or fruits[L] == fruits[i]:
                i += 1
                if i == N:
                    result = i - L if i - L > result else result
                continue
            else:
                result = i - L if i - L > result else result
                L = R
                R += 1
                i = R + 1
        return result


solution = Solution()
print(solution.totalFruit([3, 3, 3, 3, 3, 3]))

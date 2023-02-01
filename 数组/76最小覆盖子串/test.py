class Solution:
    def minWindow(self, s, t):
        t_Count = {}
        for i in t:
            if i not in t_Count:
                t_Count[i] = 1
            else:
                t_Count[i] += 1
        # print(t_Count)

        L = 0

        while L < len(s) and s[L] not in t_Count.keys():
            L += 1
        R = L
        res = ""
        len_res = len(s)+1
        while R < len(s):
            if s[R] in t_Count:
                t_Count[s[R]] -= 1
            if all(v <= 0 for v in t_Count.values()):
                res = s[L:R+1] if len(s[L:R+1]) < len_res else res
                len_res = len(res)
                while all(v <= 0 for v in t_Count.values()):
                    if s[L] in t_Count.keys():
                        t_Count[s[L]] += 1
                    L += 1
                res = s[L-1:R+1] if len(s[L:R+1]) < len_res else res
                len_res = len(res)
            R += 1
        return res


solution = Solution()
print(solution.minWindow("ADOBECODEBANC", "ABC"))

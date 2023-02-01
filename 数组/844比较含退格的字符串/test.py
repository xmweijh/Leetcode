# 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
# 用栈很好处理 普通字符串入栈 遇到#且栈不为空 则弹出栈顶 相当于退格操作
class Solution:
    def backspaceCompare(self, s, t):
        def clear(s):
            res = list()
            for i in s:
                if i != '#':
                    res.append(i)
                elif res:
                    res.pop()
            return "".join(res)

        return clear(s) == clear(t)


solution = Solution()
print(solution.backspaceCompare("ab#c",  "ad#c"))

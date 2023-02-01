// #只对前面的字符生效 所以可以采用逆序遍历 设置双指针分别遍历s与t的末尾
// 实际是在找有效字母对比
// 如果是# 则skip加1 向前遍历，否则判断skip是否大于0 若大于则抵消当前指针所指的字母 继续向前遍历  直到不为#且skip=0无法抵消，此时与另一字符串当前指针所指字母比较 不相等则false
var backspaceCompare = function (S, T) {
    let i = S.length - 1,
        j = T.length - 1,
        skipS = 0,
        skipT = 0;
    // 大循环
    while (i >= 0 || j >= 0) {
        // S 循环
        while (i >= 0) {
            if (S[i] === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else break;
        }
        // T 循环
        while (j >= 0) {
            if (T[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else break;
        }
        if (S[i] !== T[j]) return false;
        i--;
        j--;
    }
    return true;
};

console.log(backspaceCompare("ab##", "c#d#"))
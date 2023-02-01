/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var getNext = function (p) {
    const plen = p.length;
    let next = new Array(plen);
    next[0] = -1    // next[0]初始化为-1, 表示子串已经滑动到头  为入口
    let k = -1;     // p[k]表示前缀子串
    let j = 0;      // p[j]表示后缀子串
    while (j < plen - 1) {
        // next表next[j]记录的其实是j位置前（不包含j）的字符串所包含的最大相同前缀后缀
        // 相等则直接记录next[j++] = k+1
        if (k === -1 || p[j] === p[k]) {
            k++;
            j++;
            next[j] = k;
        }
        // 不相等 k回溯 直到相等或者回到起点
        // 重点是k的回溯位置  为当前最大相同前缀后缀的最大相同前缀后缀
        else {
            k = next[k];
        }
    }
    return next;
}

var strStr = function (haystack, needle) {
    const hlen = haystack.length, nlen = needle.length;
    // i,j 分别指向主串和子串串
    let i = 0, j = 0;
    const next = getNext(needle)
    while (i < hlen && j < nlen) {
        // 如果匹配 都指向下一位  j=-1相当于入口条件
        if (j === -1 || haystack[i] === needle[j]) {
            i++; j++;
            continue;
        }
        // 否则子串按照next表回溯
        else {
            j = next[j]
        }
    }
    // 匹配成功 返回第一个匹配字母索引
    if (j === nlen) {
        return i - j
    }
    // 否则匹配失败
    return -1;
};

console.log(strStr("sadbutsad", "sad"))
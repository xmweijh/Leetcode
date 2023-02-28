/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // 要尽可能多的字符串，所以能分就分
    let hash = {}
    // 记录每个字母最后一次出现的位置
    for(let i = 0; i < s.length; i++) {
        hash[s[i]] = i
    }
    let result = []
    let left = 0
    let right = 0
    for(let i = 0; i < s.length; i++) {
        // 当前遍历过字母的最大右边界
        right = Math.max(right, hash[s[i]])
        // 到达当前遍历过字母的最大右边界 进行划分 因为后续不会再有重复字母
        if(right === i) {
            result.push(right - left + 1)
            left = i + 1
        }
    }
    return result
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))
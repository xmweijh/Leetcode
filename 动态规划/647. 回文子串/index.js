/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // 以s[i]为中心，查找奇数长度的回文子串
        count += countPalindromicSubstrings(s, i, i);
        // 以s[i]和s[i+1]为中心，查找偶数长度的回文子串
        count += countPalindromicSubstrings(s, i, i + 1);
    }
    return count;
}

function countPalindromicSubstrings(s, left, right) {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    return count;
}

let s = 'aaa'
console.log(countSubstrings(s));
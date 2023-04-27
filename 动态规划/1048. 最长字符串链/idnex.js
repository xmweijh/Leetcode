/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    words.sort((a, b) => a.length - b.length);
    let f = {};
    for (let s of words) {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            res = Math.max(res, f[s.slice(0, i) + s.slice(i + 1)] || 0);
        }
        f[s] = res + 1;
    }
    return Math.max(...Object.values(f));
};
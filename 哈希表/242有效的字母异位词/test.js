/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const hash = {};
    for (let i in s) hash[s[i]] ? hash[s[i]] += 1 : hash[s[i]] = 1;
    for (let i in t) hash[t[i]] ? hash[t[i]] -= 1 : hash[t[i]] = -1;
    for (let i in hash) {
        if (hash[i] !== 0)
            return false;
    }
    return true;
};

console.log(isAnagram("", ""))
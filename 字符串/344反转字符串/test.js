/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let len = s.length;
    let l = 0, r = len - 1;
    while (l < r) {
        let temp = s[l];
        s[l++] = s[r];
        s[r--] = temp;
    }
    return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]))
/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
    const n = s.length;
    let i = 0;
    for (let j = 1, k = 0; j + k < n; ) {
        if (s[i + k] === s[j + k]) {
            ++k;
        } else if (s[i + k] < s[j + k]) {
            i = Math.max(i+k+1, j)
            k=0
            j = i + 1;
        } else {
            j += k + 1;
            k = 0;
        }
    }
    return s.slice(i);
};

let s = "cacacb"
console.log(lastSubstring(s))
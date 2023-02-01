/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = [];
    for (var i = 0; i < s.length; i++) {
        let temp = 0
        if (stack.length) { temp = stack.pop(); }
        else { stack.push(s[i]); continue; }
        if (s[i] !== temp) { stack.push(temp); stack.push(s[i]); }
    }
    return stack.join('')
};

console.log(removeDuplicates("abbaca"))
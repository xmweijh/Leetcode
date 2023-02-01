/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const newhash = new Map();
    for (const s of magazine) {
        newhash.set(s, (newhash.get(s) || 0) + 1);
    }
    for (const s of ransomNote) {
        if (newhash.has(s) && newhash.get(s) !== 0) {
            newhash.set(s, newhash.get(s) - 1)
        }
        else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct('aa', 'ab'))
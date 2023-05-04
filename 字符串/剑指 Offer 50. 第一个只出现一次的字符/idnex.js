/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    for (let item of s) {
        map.set(item, map.get(item)+1 || 1)
    }
    for(let [key, value] of map.entries()) {
        if(value === 1) return key
    }
    return ' '
};

console.log(firstUniqChar("abaccdeff"))
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i])) {
            let tmp = map.get(s[i])
            tmp[1] = i;
            map.set(s[i], tmp)
        } else {
            map.set(s[i], [i, i])
        }
    }
    let count = 1
    for( let item of map) {
        
    }
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))
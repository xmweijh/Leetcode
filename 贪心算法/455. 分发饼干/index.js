/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let num = 0
    let j = 0
    for (let i = 0; i < g.length; i++) {
        for (; j < s.length; j++) {
            if(s[j]>=g[i]) {
                num += 1
                j++
                break
            }
        }
    }
    return num
};
console.log(findContentChildren([1,2,3],[3]))
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const n = names.length;
    const ind = Array.from({length:n}, (_, i) => i);
    ind.sort((a, b) => heights[b] - heights[a])
    const res = []
    for(let i = 0; i< n; i++) {
        res.push(names[ind[i]])
    }
    return res
};
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0])
    let temStart = intervals[0][0]
    let temEnd = intervals[0][1]
    const res = []
    for(let i=1; i<intervals.length; i++) {
        if(intervals[i][0]<=temEnd) {
            temEnd = Math.max(temEnd, intervals[i][1])
            continue
        }
        res.push([temStart, temEnd])
        temStart = intervals[i][0]
        temEnd = intervals[i][1]
    }
    res.push([temStart, temEnd])
    return res
};

console.log(...merge([[1,4],[4,5]]))
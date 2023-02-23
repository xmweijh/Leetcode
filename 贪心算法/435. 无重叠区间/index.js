/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0])
    let count = 0;
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0]<intervals[i-1][1]) {
            count += 1
            intervals[i][1] = Math.min(intervals[i][1], intervals[i-1][1])
        }
    }
    return count
};

console.log(eraseOverlapIntervals([ [1,2], [2,3] ]))
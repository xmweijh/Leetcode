/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    // 按照xstart升序排列
    points.sort((a,b)=> a[0]-b[0])
    let count = 1
    let cover = [-Infinity, Infinity]
    for( let i=0; i<points.length; i++) {
        cover = [Math.max(points[i][0],cover[0]), Math.min(points[i][1],cover[1])]
        if( cover[0]>cover[1]) {
            count += 1
            cover = [...points[i]]
        }
    }
    return count
};

console.log(findMinArrowShots([[-2147483646,-2147483645],[2147483646,2147483647]]))
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    // 分别代表 北 东 南 西
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let tmpD = 0
    let tmpI = [0, 0]
    for (let item of instructions) {
        if (item === 'G') {
            tmpI[0] = tmpI[0] + dir[tmpD][0]
            tmpI[1] = tmpI[1] + dir[tmpD][1]
        } else if (item === 'L') {
            tmpD = tmpD - 1 >= 0 ? tmpD - 1 : 3
        } else if (item === 'R') {
            tmpD = tmpD + 1 <= 3 ? tmpD + 1 : 0
        }
    }
    if((tmpI[0] !== 0 || tmpI[1] !== 0) && tmpD === 0) return false
    return true
};

console.log(isRobotBounded("GG"))
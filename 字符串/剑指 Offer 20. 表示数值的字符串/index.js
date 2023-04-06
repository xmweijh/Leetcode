/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {
    // 定义状态表
    const states = [
        { ' ': 0, 's': 1, 'd': 2, '.': 4 },  // 为空格的下一位可能状态，也是开始的可能状态
        { 'd': 2, '.': 4 } ,                 // 为正负号的下一位可能状态
        { 'd': 2, '.': 3, 'e': 5, ' ': 8 },  // 小数点前数字下一位的可能状态
        { 'd': 3, 'e': 5, ' ': 8 },          // 小数点后一位的可能状态
        { 'd': 3 },                          // 为空格是小数点后一位状态
        { 's': 6, 'd': 7 },                  // e后一位状态
        { 'd': 7 },                          // e后的正负符号后一位状态
        { 'd': 7, ' ': 8 },                  // e后的数字后一位可能状态
        { ' ': 8 }                           // 结尾状态
    ];
    let p = 0;
    for(let c of s) {
        if(c >= '0' && c <= '9') {
            t = 'd';
        } else if("+-".includes(c)) {
            t = 's';
        } else if("eE".includes(c)) {
            t = 'e';
        } else if(". ".includes(c)) {
            t = c
        } else {
            t = '?'
        }
        if(!states[p].hasOwnProperty(t)) {
            return false;
        }
        p = states[p][t]
    }

    // 2， 3， 7， 8为可能的结束状态
    for(let i of [2,3,7,8]) {
        if(p === i) return true;
    }
    return false;
  }
  

console.log(isNumber('0'))
/**
 * @param {number} n
 * @return {boolean}
 */


// var isHappy = function (n) {
//     if (n === 1) {
//         return true;
//         s.clear();
//     }
//     let sum = 0, remaining = 0;
//     while (n > 0) {
//         remaining = n % 10
//         n = Math.floor(n / 10);
//         sum += remaining * remaining;
//     }
//     if (s.has(sum)) {
//         return false;
//         s.clear();
//     }
//     else
//         s.add(sum);
//     return isHappy(sum);
// };

var isHappy = function (n) {
    const s = new Set();

    while (n != 1) {
        let sum = 0, remaining = 0;
        while (n > 0) {
            remaining = n % 10
            n = Math.floor(n / 10);
            sum += remaining * remaining;
        }
        if (s.has(sum)) {
            return false;
        }
        else
            s.add(sum);
        n = sum
    }
    return true;
};

console.log(isHappy(7))
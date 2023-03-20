/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      let digits = new Set();
      let num = i;
      while (num > 0) {
        let digit = num % 10;
        if (digits.has(digit)) {
          count++;
          break;
        }
        digits.add(digit);
        num = Math.floor(num / 10);
      }
    }
    return count;
};

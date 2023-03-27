/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    let res = 0;
    
    for (let len = 1; len <= s.length; len++) {
      for (let i = 0; i + len - 1 < s.length; i++) {
        let sStr = s.substring(i, i + len);
  
        for (let j = 0; j + len - 1 < t.length; j++) {
          let tStr = t.substring(j, j + len);
          let diffCount = 0;
  
          for (let k = 0; k < len; k++) {
            if (sStr[k] !== tStr[k]) {
              diffCount++;
            }
          }
  
          if (diffCount === 1) {
            res++;
          }
        }
      }
    }
  
    return res;
};

let s = "aba", t = "baba"
console.log(countSubstrings(s, t));
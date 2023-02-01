/**
 * @param {string} s
 * @return {boolean}
 */
// var repeatedSubstringPattern = function (s) {
//     const slen = s.length;
//     let i = 0;
//     let temp = '';
//     while (i < slen) {
//         temp = temp + s[i];
//         let stage = temp.length;
//         let j = i + 1;
//         while (j + stage <= slen) {
//             let str = s.slice(j, j + stage);
//             if (str === temp) {
//                 j += stage;
//                 if (j === slen) {
//                     return true;
//                 }
//             }
//             else {
//                 break;
//             }
//         }
//         i++;
//     }
//     return false;
// };
var repeatedSubstringPattern = function (s) {
    if (s.length === 0)
        return false;

    const getNext = (s) => {
        let next = [];
        let j = -1;

        next.push(j);

        for (let i = 1; i < s.length; ++i) {
            while (j >= 0 && s[i] !== s[j + 1])
                j = next[j];
            if (s[i] === s[j + 1])
                j++;
            next.push(j);
        }

        return next;
    }

    let next = getNext(s);

    if (next[next.length - 1] !== -1 && s.length % (s.length - (next[next.length - 1] + 1)) === 0)
        return true;
    return false;
};


console.log(repeatedSubstringPattern('abcabcabcabc'))
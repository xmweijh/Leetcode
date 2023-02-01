/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// var reverseLeftWords = function (s, n) {
//     /** Utils */
//     function reverseWords(strArr, start, end) {
//         let temp;
//         while (start < end) {
//             temp = strArr[start];
//             strArr[start] = strArr[end];
//             strArr[end] = temp;
//             start++;
//             end--;
//         }
//     }
//     /** Main code */
//     let strArr = s.split('');
//     let length = strArr.length;
//     reverseWords(strArr, 0, length - 1);
//     reverseWords(strArr, 0, length - n - 1);
//     reverseWords(strArr, length - n, length - 1);
//     return strArr.join('');
// };

var reverseLeftWords = function (s, n) {
    const length = s.length;
    let i = 0;
    while (i < length - n) {
        s = s[length - 1] + s;
        i++;
    }
    return s.slice(0, length);
};

console.log(reverseLeftWords('abcdefg', 2))
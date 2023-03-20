/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    return checkConcatenation(a, b) || checkConcatenation(b, a);
}

const checkConcatenation = (a, b) => {
    const n = a.length;
    let left = 0, right = n - 1;
    while (left < right && a[left] === b[right]) {
        left++;
        right--;
    }
    // 若left>=right 则ap+bs为回文
    if (left >= right) {
        return true;
    }
    // 否贼从左或者右分割  看这个区间的a,b是否为回文 有一个是则能形成回文
    return checkSelfPalindrome(a, left, right) || checkSelfPalindrome(b, left, right);
}

const checkSelfPalindrome = (a, left, right) => {
    while (left < right && a[left] === a[right]) {
        left++;
        right--;
    }
    return left >= right;
};


let a = "abdef", b = "fecab"
// let a = "abdef", b = "fecab"
console.log(checkPalindromeFormation(a, b))
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
    const n = books.length;
    const dp = new Array(n + 1).fill(1000000);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        let tmp_width = 0,
            j = i,
            h = 0;
            // j到i的书籍放到新的一层  高度为他们的最大高度
        while (j > 0) {
            tmp_width += books[j - 1][0];
            if (tmp_width > shelfWidth) {
                break;
            }
            h = Math.max(h, books[j - 1][1]);
            dp[i] = Math.min(dp[i], dp[j - 1] + h);
            j -= 1;
        }
    }
    return dp[n];
};
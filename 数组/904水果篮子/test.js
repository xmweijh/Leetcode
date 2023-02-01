var totalFruit = function (fruits) {
    const n = fruits.length;
    const cnt = new Map();

    let left = 0, ans = 0;
    for (let right = 0; right < n; ++right) {
        cnt.set(fruits[right], (cnt.get(fruits[right]) || 0) + 1);
        while (cnt.size > 2) {
            cnt.set(fruits[left], cnt.get(fruits[left]) - 1);
            if (cnt.get(fruits[left]) == 0) {
                cnt.delete(fruits[left]);
            }
            ++left;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};


console.log(totalFruit([0, 1, 2, 2]))
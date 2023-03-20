/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
    let ans = s, queue = [s], visited = new Set().add(s);

    while (queue.length) {
        const next = [];

        for (const q of queue) {
            // 是否最小
            if (q < ans) ans = q;

            // 轮转
            const rs = q.slice(q.length - b) + q.slice(0, q.length - b);
            if (!visited.has(rs)) visited.add(rs), next.push(rs);

            // 累加
            const arr = [...q];
            for (let i = 1; i < q.length; i += 2) {
                arr[i] = `${(+q[i] + a) % 10}`;
            }
            const as = arr.join('');
            if (!visited.has(as)) visited.add(as), next.push(as);
        }

        queue = next;
    }

    return ans;
}

let s = "5525", a = 9, b = 2
console.log(findLexSmallestString(s, a, b))
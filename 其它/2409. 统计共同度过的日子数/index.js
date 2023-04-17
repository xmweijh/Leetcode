/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    // 记录每个月第一天是一年的多少天 因为同一个自然年，可以直接这样处理
    const days = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    const s = arriveAlice <= arriveBob ? arriveBob : arriveAlice, e = leaveAlice <= leaveBob ? leaveAlice : leaveBob;
    if (e < s) return 0;

    const d1 = (days[+s.slice(0, 2) - 2] || 0) + +s.slice(3);
    const d2 = (days[+e.slice(0, 2) - 2] || 0) + +e.slice(3);

    return d2 - d1 + 1;
};

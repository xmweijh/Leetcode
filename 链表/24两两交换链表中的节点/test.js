/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let ret = new ListNode(0, head),
        slow = fast = ret;
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next
    };
    slow.next = slow.next.next;
    return ret.next;
};
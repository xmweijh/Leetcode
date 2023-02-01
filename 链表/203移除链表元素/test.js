/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeElements = function (head, val) {
    let p = ListNode(head.val, head.next);
    p = head
    while (p.next != null) {
        if (p.val === val) {
            p.next = p.next.next
        }
    }
    return head
};

console.log(removeElements([7, 7, 7, 7], 7))
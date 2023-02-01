/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let A_c = ListNode(0, headA), B_c = ListNode(1, headB);
    while (A_c.next != null) {
        B_c = ListNodes(1, headB)
        while (B_c.next != null) {
            if (B_c.val = A_c.val) {
                return B_c.val;
            }
            B_c = B_c.next;
        }
        A_c = A_c.next;
    }
    return null;
};
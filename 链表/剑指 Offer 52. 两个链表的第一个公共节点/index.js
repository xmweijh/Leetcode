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
 // 两者一起走 遍历到最后一定会走到相同的点  否则就是null
 var getIntersectionNode = function(headA, headB) {
    let A = headA;
    let B = headB;
    while (A !== B) {
      A = A ? A.next : headB;
      B = B ? B.next : headA;
    }
    return A;
 };
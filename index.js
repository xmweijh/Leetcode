/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let stack = [];
    while (head) {
        stack.push(head);
        head = head.next;
    }
    let res
    while (k--) {
        res = stack.pop();
    }
    return res;
};

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

let p5 = new ListNode(5)
let p4 = new ListNode(4, p5);
let p3 = new ListNode(3, p4);
let p2 = new ListNode(2, p3);
let p1 = new ListNode(1, p2)

console.log(getKthFromEnd(p1, 2))
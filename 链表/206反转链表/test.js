function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
const reverseList = function (head) {
    let l = new ListNode(0);
    let c = head;
    let r = head.next;
    while (c !== null) {
        r = c.next;
        c.next = l;
        l = c;
        c = r;
    }
    return l
};

const getNode = function (root) {
    let len = 0
    let head = root
    let node = root
    while (node) {
        node = node.next
        len++
    }
    len = Math.floor(len / 2)
    while (len-- > 1) {
        head = head.next
    }
    let l = reverseList(head.next)
    head.next = l
    return root
}
let l2 = new ListNode(4)
let l3 = new ListNode(3, l2)
let l4 = new ListNode(2, l3)
let l5 = new ListNode(1, l4)

let root = getNode(l5)
while (root) {
    console.log(root.val)
    root = root.next
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// var nextLargerNodes = function (head) {
//     let res = [];
//     while (head) {
//         let tmp = head.next
//         while (tmp) {
//             if (tmp.val > head.val) {
//                 res.push(tmp.val);
//                 head = head.next;
//                 break;
//             }
//             tmp = tmp.next;
//         }
//         if (!tmp) {
//             res.push(0);
//             head = head.next;
//         }
//     }
//     return res;
// };

var nextLargerNodes = function (head) {
    let nodeValues = [];
    // 用数组记录，方便取索引
    while (head !== null) {
      nodeValues.push(head.val);
      head = head.next;
    }
    
    let answer = new Array(nodeValues.length).fill(0);
    let stack = [];
    for (let i = 0; i < nodeValues.length; i++) {
      while (stack.length && nodeValues[i] > nodeValues[stack[stack.length - 1]]) {
        answer[stack.pop()] = nodeValues[i];
      }
      stack.push(i);
    }
    
    return answer;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let p3 = new ListNode(5)
let p2 = new ListNode(1, p3)
let p1 = new ListNode(2,p2);

console.log(nextLargerNodes(p1))



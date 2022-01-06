/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const newLinkList = new ListNode()
/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if (head === null || head.next === null) return head
  newLinkList = reverseList(head.next)
  // [1,2,3,4,5] -> [5,4,3,2]
  head.next.next = head
  head.next = null
  return newLinkList
};

var reverseList2 = function(head) {
  let newLinkList = null
  if (head === null || head.next === null) return head
  while (head !== null) {
    const temp = head.next // 2 3 4
    head.next = newLinkList // null 1 2
    newLinkList = head // 1 2 3
    head = temp // 2 3 4
  }
  return newLinkList
};



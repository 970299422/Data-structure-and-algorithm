/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head === null) return head
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
};

var removeElements2 = function(head, val) {
  const newLinkList = new ListNode()
  newLinkList.next = head
  let temp = newLinkList
  while(temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }

  return newLinkList.next
};
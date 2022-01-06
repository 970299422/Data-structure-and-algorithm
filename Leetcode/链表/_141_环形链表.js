/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 快慢指针。当两个指针相遇时，说明快指针追上了满指针，则说明有环，当快指针或者快指针指向null，则说明没有环
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) return false
  
  let slow = head
  let fast = head.next
  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true
    slow = slow.next;
    fast = fast.next.next;
  }

  return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 1,1,2,3,3
 */
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head;

  let temp = head // 1
  let temp2 = head.next // 1
  while (temp2 !== null) {
    if (temp.val === temp2.val) { // true false false true
      temp.next = temp2.next
      // 1tick temp 1,2,3,3 temp2 1,2,3,3
      // 4tick temp 3,3 temp2 3,3
    } else {
      temp = temp2
      // 2tick temp 2,3,3 temp2 2,3,3
      // 3tick temp 3,3 temp2 3,3
    }
    temp2 = temp2.next
    // 1tick 2,3,3
    // 2tick 3,3
    // 3tick 3
    // 4tick null
    
  }
  return head
}
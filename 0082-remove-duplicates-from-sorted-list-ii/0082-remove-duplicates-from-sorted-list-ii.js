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
 */
var deleteDuplicates = function(head) {
  let left = null
  let right = head

  while(right) {
    if(right.next?.val === right.val) {
      while(right.next?.val === right.val) {
        right = right.next
      }
    } else {
      left ? left.next = right : head = right
      left = right
    }
    right = right.next
  }
  if(left) left.next = null
  return left && head
}
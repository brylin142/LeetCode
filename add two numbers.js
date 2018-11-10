// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//   Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode()
  let current = result
  let carry = 0
  while (l1.val !== undefined || l2.val !== undefined) {
    if (current.val !== undefined) {
      current = current.next = new ListNode();
    }
    const v1 = l1.val || 0
    const v2 = l2.val || 0

    let sum = v1 + v2 + carry
    carry = 0

    if (sum >= 10) {
      current.val = sum - 10
      carry = 1
    } else current.val = sum

    l1 = l1.next || {}
    l2 = l2.next || {}
  }
  if (carry > 0) current.next = new ListNode(1)
  return result
};
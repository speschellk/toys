/*
Write code to partition a linked list around a value x, such that all nodes < x come
before (to the left of) all nodes >= x.

|| nodes < x | nodes >= x ||

If x is contained within the list, the values of x only need to be after the elements less than x (see below).

|| nodes < x | x's, nodes >= x ||

~OR~

|| nodes < x | nodes >= x, x's ||

The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

EXAMPLES:
I: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [x = 5] // partition value is also present in the list
O: 3 -> 1 -> 2 -> | 10 -> 5 -> 5 -> 8       // 5's appear in the right partition with 10 and 8

I: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [x = 7] // partition value is not present in the list
O: 3 -> 5 -> 5 -> 2 -> 1 -> | 8 -> 10       // 8 and 10 are in the right partition
*/

exports.partition = function(list, x) {
  if (!list) return null;

  let node = list.head;
  let rightHead, rightTail, leftHead, leftTail;

  while (node) {
    if (node.value < x) {
      let newTail = Object.assign({}, node);
      if (!leftHead) {
        leftHead = newTail;
      }
      if (leftTail) {
        leftTail.next = newTail;
      }
      leftTail = newTail;
    } else { // node.value >= x
      let newTail = Object.assign({}, node);
      if (!rightHead) {
        rightHead = newTail;
      }
      if (rightTail) {
        rightTail.next = newTail;
      }
      rightTail = newTail;
    }
    node = node.next;
  }
  leftTail.next = rightHead;
  return leftHead;
}

const { spreadList } = require('../../config/linkedLists/lists');
console.log(exports.partition(spreadList, 70));

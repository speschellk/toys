
// Time complexity: O(1), Space complexity: O(1)
exports.deleteMiddleNode = function(node) {
  if (!node || !node.next) return null;

  let next = node.next;
  node.value = next.value;
  node.next = next.next;
}


/*
 Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

I: node from a singly linked list
O: no return, just side effect of removing node from list
C: given access only to the node that will be removed
E: no node passed in
*/

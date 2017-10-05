
// If linked list has a length property
// Time complexity: O(n), Space complexity: O(1) extra space
exports.kthToLast = function(list, k) {
  if (!list || !k || k > list.length) return null;

  let targetNode = list.length - k + 1; // 4th from last in list of length 6 => 3rd node.
  let nodeCount = 1;
  let currentNode = list.head;

  while (targetNode > nodeCount) {
    currentNode = currentNode.next;
    nodeCount++;
  }

  return currentNode;
}



// If linked list has no length property and no extra data structures
// Time complexity: O(n^2), Space complexity: O(1) extra space
exports.kToLast = function(list, k) {
  if (!list || !k) return null;
  let length = 1;
  let currentNode = list.head;

  while (currentNode.next) {
    currentNode = currentNode.next;
    length++;
  }

  list.length = length;
  return kthToLast(list, k);
}



// If no length property, but data structures allowed
// Time complexity: O(n), Space complexity: O(n)
exports.kthToLastMap = function(list, k) {
  if (!list || !k) return null;

  let length = 1;
  let currentNode = list.head;
  let nodeMap = new Map();
  nodeMap.set(1, list.head);

  while (currentNode.next) {
    currentNode = currentNode.next;
    length++;
    nodeMap.set(length, currentNode);
  }

  return k > length ? null : nodeMap.get((length - k + 1));
}

/*
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

I: singly linked list (or node of SLL)
O: kth to last element of the list
C: none specified; solve with and without extra data structures.
E: no list or no k passed in, list is single node, list is two nodes, k is longer than list
*/

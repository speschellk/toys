// Time complexity: O(n)
// Space complexity: O(1) extra space
exports.removeDuplicates = function(list) {
  if (!list) return null;

  let nodeSet = new Set();
  let previous;
  let node = list.head;

  do {
    if (!nodeSet.has(node.value)) {
      nodeSet.add(node.value);
      previous = node;
      node = node.next;
    } else {
      let nodeToDelete = node;
      previous.next = node = node.next;
    }
  } while(node);

  list.tail = previous;
  return list;
}

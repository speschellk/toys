const { dupList } = require('./lists');

console.log(removeDuplicates(dupList)); // list should have node values 1, 2, 3, head and tail

exports.removeDuplicates = function(list) {
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
      delete nodeToDelete;
    }
  } while(node);

  list.tail = previous;
  return list;
}

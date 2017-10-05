const { LinkedList, LinkedListWithLength } = require('./classes');

exports.buildList = function (values) {
  const list = new LinkedList();

  for (let val of values) {
    list.addToTail(val);
  }
  return list;
}

exports.buildListWithLength = function (values) {
  const list = new LinkedListWithLength();

  for (let val of values) {
    list.addToTail(val);
  }
  return list;
}

exports.checkForDups = function(list) {
  let node = list.head;
  let hasDups = false;

  while (node && !hasDups) {
    let target = node.value;
    let next = node.next;

    while (next && !hasDups) {
      if (next.value === target) {
        hasDups = true;
      }
      next = next.next;
    }
    node = node.next;
  }
  return hasDups;
}

exports.countNodes = function(list) {
  let count = 0;
  let copy = Object.assign({}, list);

  while (copy.head) {
    count++;
    copy.head = copy.head.next;
  }
  return count;
}

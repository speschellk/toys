const { LinkedList } = require('./classes');

exports.buildList = function(values) {
  const list = new LinkedList();

  for (let val of values) {
    list.addToTail(val);
  }
  return list;
}

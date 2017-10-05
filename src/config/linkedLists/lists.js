const { buildList } = require('./methods');


let uniques = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
exports.uniqueList = buildList(uniques); // SLL with unique node values


let duplicates = [1, 2, 1, 3, 1, 2, 4, 8, 8, 5];
exports.dupList = buildList(duplicates); // SLL with duplicate node values


let spread = [5, 87, 54, 20, 1051, 2, 88, 205];
exports.spreadList = buildList(spread); // SLL with pseudorandom, widely spread values


let single = [10];
exports.singleNodeList = buildList(single); // SLL with a single node


exports.emptyList = buildList([]); // SLL with no nodes

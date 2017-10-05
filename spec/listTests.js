const { uniqueList, dupList, spreadList, singleNodeList, emptyList } = require('../src/config/linkedLists/lists');
const { deleteMiddleNode } = require('../src/problems/linkedLists/deleteMiddleNode');
const { kthToLast, kToLast, kthToLastMap } = require('../src/problems/linkedLists/kthToLast');
const { partition } = require('../src/problems/linkedLists/partition');
const { removeDuplicates } = require('../src/problems/linkedLists/removeDuplicates');


// deleteMiddleNode
/* Test cases */
console.log(deleteMiddleNode(emptyList)); // null
deleteMiddleNode(dupList.head.next);
console.log(dupList); // 1, 1, 3, 1, 2, 4, 8, 8, 5;

//kthToLast
/* Test cases */
console.log(kthToLast());            // null
console.log(kthToLast(list, 4));     // node.value = 3, node.next = 4
console.log(kthToLast(list, 12));    // null
console.log(kthToLast(list, 1));     // node.value = 6, node.next = null
console.log(kthToLast(list, 6));     // node.value = 1, node.next = 2
console.log(kthToLast(list2, 1));    // node.value = 1, node.next = null

console.log(kToLast());              // null
console.log(kToLast(list, 4));       // node.value = 3, node.next = 4
console.log(kToLast(list, 12));      // null
console.log(kToLast(list, 1));       // node.value = 6, node.next = null
console.log(kToLast(list, 6));       // node.value = 1, node.next = 2
console.log(kToLast(list2, 1));      // node.value = 1, node.next = null

console.log(kthToLastMap());         // null
console.log(kthToLastMap(list, 4));  // node.value = 3, node.next = 4
console.log(kthToLastMap(list, 12)); // null
console.log(kthToLastMap(list, 1));  // node.value = 6, node.next = null
console.log(kthToLastMap(list, 6));  // node.value = 1, node.next = 2
console.log(kthToLastMap(list2, 1)); // node.value = 1, node.next = null


//partition


//removeDuplicates

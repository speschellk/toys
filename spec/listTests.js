const { uniqueList, dupList, spreadList, singleNodeList, emptyList } = require('../src/config/linkedLists/lists');
const { removeDuplicates } = require('../src/problems/linkedLists/removeDuplicates');
const { deleteMiddleNode } = require('../src/problems/linkedLists/deleteMiddleNode');
const { kthToLast, kToLast, kthToLastMap } = require('../src/problems/linkedLists/kthToLast');
const { partition } = require('../src/problems/linkedLists/partition');


describe('Linked list tests', () => {

  describe('Remove duplicates', () => {
    let dupsRemoved = removeDuplicates(dupList);

    test('returns null if empty list or no list passed in', () => {
      expect(removeDuplicates()).toBeNull();
    });

    test('list contains no duplicate node values', () => {
      expect(dupsRemoved).toMatchObject(uniqueList);
    });

    test('list retains all unique node values', () => {
      expect(dupsRemoved).toMatchObject(uniqueList);
    });

    test('list still has head and tail properties', () => {
      expect(dupsRemoved.head).toBeTruthy();
      expect(dupsRemoved.head.value).toBe(1);
      expect(dupsRemoved.tail).toBeTruthy();
      expect(dupsRemoved.tail.value).toBe(5);
    });
  });

  describe('kth to lasts', () => {
    test('returns null if empty list or no list passed in', () => {
      expect(kthToLast()).toBeNull();
      expect(kToLast()).toBeNull();
      expect(kthToLastMap()).toBeNull();
    });
  });
});
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

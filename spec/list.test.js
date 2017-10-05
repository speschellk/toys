const {
  uniqueList,
  uniqueListWithLength,
  dupList,
  spreadList,
  singleNodeList,
  emptyList
} = require('../src/config/linkedLists/lists');
const {
  checkForDups,
  countNodes
} = require('../src/config/linkedLists/methods');
const { removeDuplicates } = require('../src/problems/linkedLists/removeDuplicates');
const { deleteMiddleNode } = require('../src/problems/linkedLists/deleteMiddleNode');
const {
  kthToLast,
  kToLast,
  kthToLastMap
} = require('../src/problems/linkedLists/kthToLast');
const { partition } = require('../src/problems/linkedLists/partition');


describe('Linked list tests', () => {
  let deduped = removeDuplicates(dupList);

  describe('Remove duplicates', () => {
    test('returns null if no list passed in', () => {
      expect(removeDuplicates()).toBeNull();
    });

    test('list contains no duplicate node values', () => {
      expect(checkForDups(deduped)).toBeFalsy();
    });

    test('list retains all unique node values', () => {
      expect(deduped).toMatchObject(uniqueList);
    });

    test('list retains head and tail properties', () => {
      expect(deduped.head).toBeTruthy();
      expect(deduped.head.value).toBe(1);
      expect(deduped.tail).toBeTruthy();
      expect(deduped.tail.value).toBe(6);
    });

    test('list head and tail properties point to correct nodes', () => {
      expect(deduped.head.value).toBe(1);
      expect(deduped.tail.value).toBe(6);
    });
  });

  describe('kth to last', () => {
    test('returns null if empty list or no list passed in', () => {
      expect(kthToLast()).toBeNull();
      expect(kToLast()).toBeNull();
      expect(kthToLastMap()).toBeNull();
    });

    test('returns null if k is larger than the number of items in the list', () => {
      expect(kthToLast(uniqueListWithLength, 20)).toBeNull();
      expect(kToLast(uniqueList, 20)).toBeNull();
      expect(kthToLastMap(uniqueList, 20)).toBeNull();
    });

    test('returns list tail when k = 1', () => {
      expect(kthToLast(uniqueListWithLength, 1)).toMatchObject(uniqueListWithLength.tail);
      expect(kthToLast(singleNodeList, 1)).toMatchObject(singleNodeList.tail);
      expect(kToLast(uniqueList, 1)).toMatchObject(uniqueList.tail);
      expect(kToLast(singleNodeList, 1)).toMatchObject(singleNodeList.tail);
      expect(kthToLastMap(uniqueList, 1)).toMatchObject(uniqueList.tail);
      expect(kthToLastMap(singleNodeList, 1)).toMatchObject(singleNodeList.tail);
    });

    test('returns list head when k is equivalent to list length', () => {
      let uLen = uniqueList.length;
      let sLen = singleNodeList.length;

      expect(kthToLast(uniqueListWithLength, uLen)).toMatchObject(uniqueListWithLength.head);
      expect(kthToLast(singleNodeList, sLen)).toMatchObject(singleNodeList.head);
      expect(kToLast(uniqueList, uLen)).toMatchObject(uniqueList.head);
      expect(kToLast(singleNodeList, sLen)).toMatchObject(singleNodeList.head);
      expect(kthToLastMap(uniqueList, uLen)).toMatchObject(uniqueList.head);
      expect(kthToLastMap(singleNodeList, sLen)).toMatchObject(singleNodeList.head);
    });

    test('returns correct node when node is in the middle (not head or tail)', () => {
      let node = uniqueList.head.next.next
      let k = uniqueList.length - 2;

      expect(kthToLast(uniqueListWithLength, k)).toMatchObject(node);
      expect(kToLast(uniqueList, k)).toMatchObject(node);
      expect(kthToLastMap(uniqueList, k)).toMatchObject(node);
    });
  });

  describe('Delete middle node', () => {
    test('returns null if empty list or no list passed in', () => {
      expect(deleteMiddleNode()).toBeNull();
      expect(deleteMiddleNode(emptyList)).toBeNull();
    });

    test('removes a node from the list', () => {
      let copy = Object.assign({}, spreadList);
      let fullCount = countNodes(copy);
      let deletedNode = deleteMiddleNode(copy.head.next);
      let newCount = countNodes(copy);

      expect(newCount).toBe(fullCount - 1);
    });

    test('removes the node passed into it', () => {
      let nodeToRemove = Object.assign({}, uniqueList.head.next);
      deleteMiddleNode(uniqueList.head.next);

      expect(uniqueList.head.next).not.toMatchObject(nodeToRemove);
    });
  });

  describe('partition', () => {
    test('returns null if empty list or no list passed in', () => {
      expect(partition()).toBeNull();
      expect(partition(emptyList)).toBeNull();
    });
  });
});

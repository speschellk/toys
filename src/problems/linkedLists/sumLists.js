/*
You have two numbers represented by two linked lists, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
Output: (2 -> 1 -> 9). That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is,617 + 295.
Output: (9 -> 1 -> 2). That is, 912.

I: two linked lists, where e/ node is a single digit. units --> tens --> hundreds...
O: single linked list, where e/ node is a single digit, representing sum of two digits passed in
C: could be negative or positive? not sure there are head or tail properties?
E: no list(s) passed in, lists are different lengths, sum has more digits than originals, includes
*/

const { Node, LinkedList } = require('../../config/linkedLists/classes');

// assuming there is a tail property
function sumLists(list1, list2) {
  if (!list1 || !list2) return null;

  if (list1.tail.value > 0 && list2.tail.value > 0) { // both numbers are positive
    return sum(list1, list2);
  } else if (list1.tail.value < 0 && list2.tail.value < 0) { // both numbers are negative
    let sum = sum(list1, list2);
    sum.tail.value = -1 * sum.tail.value;
    return sum;
  } else { // one is positive and one is negative
    if (list1.tail.value < 0) {
      return diff(list2, list1); // second argument is the negative number
    }
    return diff(list1, list2);
  }
}

function sum(list1, list2) {
  let sumList = new LinkedList();
  let digit1, digit2, sum, carry = 0;

  while (list1.head || list2.head) {
    digit1 = list1.head.value || 0;
    digit2 = list2.head.value || 0;

    sum = digit1 + digit2 + carry; // may be anything from 0 to 18
    carry = 0;

    if (sum > 9) {
      sum %= 10; // returns the ones digit of the sum
      carry = 1;      // carry is always 1
    }

    let newNode = new Node(sum);
    sumList.addToTail(newNode);

    list1.head = list1.head.next;
    list2.head = list2.head.next;
  }
  if (carry) {
    sumList.tail.next = sumList.tail;
    sumList.tail = new Node(carry);
  }
  return sumList;
}

function diff(list1, list2) { // list2 is the negative number
  let diffList = new LinkedList();
  let digit1, digit2, diff, carry = 0;

  while (list1.head || list2.head) {
    digit1 = !list1.head ? 0 : list1.head.value;
    digit2 = !list2.head ? 0 : list2.head.value < 0 ? list2.head.value : -1 * list2.head.value;

    sum = digit1 + digit2;
    sum = sum >= 0 ? sum : -1 * sum;

    let newNode = new Node(sum);
    diffList.addToTail(newNode);

    list1.head = list1.head.next;
    list2.head = list2.head.next;
  }
  diffList.tail.value *= -1;
  return diffList;
}


let test1 = new LinkedList();
test1.addToTail(9);
test1.addToTail(9);
test1.addToTail(9);

let test2 = new LinkedList();
test2.addToTail(9);
test2.addToTail(9);
test2.addToTail(-9);

console.log(sumLists(test1, test2)); // 0

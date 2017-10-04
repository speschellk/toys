/*
Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?

I: string
O: boolean indicating whether or not string had all unique chars
C: none (later, no additional data structures)
E: '', 'a', 'aaaaa', 'abcdefa', 'asdff'
*/

// Naive solution
// Time complexity: O(n)
// Space complexity: O(n)
function isUnique(str) {
  if (!str) return null;
  if (str.length === 1) return true;

  let charSet = new Set();
  for (let char of str) {
    if (charSet.has(char)) return false;
    charSet.add(char);
  }
  return true;
}

// Time complexity: O(n^2)
// Space complexity: O(1)
function isUniqueConstantSpace(str) {
  if (!str) return null;
  if (str.length === 1) return true;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) {
        return false;
      }
    }
  }
  return true;
}


/* Test cases */
console.log(isUnique('')) // null
console.log(isUnique('a')) // true
console.log(isUnique('aa')) // false
console.log(isUnique('abcdefa')) // false
console.log(isUnique('abcdefg')) // true

console.log(isUniqueConstantSpace('')) // null
console.log(isUniqueConstantSpace('a')) // true
console.log(isUniqueConstantSpace('aa')) // false
console.log(isUniqueConstantSpace('abcdefa')) // false
console.log(isUniqueConstantSpace('abcdefg')) // true

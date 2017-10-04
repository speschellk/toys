/* Given two strings, write a method to decide if one is a permutation of the other.

I: two strings
O: boolean indicating whether they are permutations of e/o
C: none...
E: '', different lengths, chars that are not alphanumeric
*/

// naive solution
// Time complexity: O(n^2)
// Space complexity: O(n) wrt str1
function isPermutation(str1, str2) {
  if (!str1 || !str2) return null;
  if (str1.length !== str2.length) return false;

  // construct map of chars and frequencies from str1
  let charMap = new Map();

  for (let char of str1) {
    let freq = charMap.get(char);
    freq = !freq ? 1 : ++freq;
    charMap.set(char, freq);
  }

  // check against str2
  for (let char of str2) {
    let freq = charMap.get(char);
    if (!freq) {
      return false;
    } else if (freq === 1) {
      charMap.delete(char);
    } else {
      charMap.set(char, --freq);
    }
  }
  return charMap.size ? false : true;
}

/* Test cases */
console.log(isPermutation('', 'a')); // null
console.log(isPermutation('a', 'a')); // true
console.log(isPermutation('abc', 'a')); // false
console.log(isPermutation('abc', 'bca')); // true
console.log(isPermutation('abc', 'abb')); // false

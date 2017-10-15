/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// naive solution
// Time complexity: O(n + n) wrt string input --> O(n)
// Space complexity: O(n)
// Pros: does not mutate original string, not recursive
// Cons: complexities can be improved, must iterate twice in cases where there are no non-repeats
function firstNonRepeatedCharacter(string) {
  if (!string || !string.length) return null;
  let charFreq = {};

  for (let char of string) {
    charFreq[char] = charFreq[char] ? ++charFreq[char] : 1;
  }

  for (let char of string) {
    if (charFreq[char] === 1) return char;
  }

  return null;
};

console.log(firstNonRepeatedCharacter(''));       // null
console.log(firstNonRepeatedCharacter('AA'));     // null
console.log(firstNonRepeatedCharacter('ABA'));    // 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // 'C'


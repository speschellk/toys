/*
Assume you have a method `isSubstring` which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to `isSubstring` (e.g., "waterbottle" is a rotation of"erbottlewat").

I: two strings
O: boolean indicating whether s2 is a rotation of s1
C: use only one call to isSubstring
E:
*/

// naive solution
// Time complexity:
// Space complexity:
function isRotation(s1, s2) {
  if (!s1 || !s2) return null;
  // return false if different lengths or strings identical or s2 not substring of s1
  if (s1.length !== s2.length || s1 === s2 || !isSubstring(s1, s2)) return false;

  // s2 is a substring of s1, and they're not identical
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === s1[0]) {
      let len = s2.length - i;
      if (s2.slice([i]) === s1.slice(0, len) && s2.slice(0, i) === s1.slice(len)) {
        return true;
      }
    }
  }
  return false;
}

function isSubstring(s1, s2) {
  return true;
}

console.log(isRotation('', '')); // null
console.log(isRotation('a', 'ab')); // false
console.log(isRotation('abc', 'abc')); // false
console.log(isRotation('waterbottle', 'erbottlewat')); // true
console.log(isRotation('waterbottle', 'ertwabottle')); // false
console.log(isRotation('ebeeeeeee', 'eeeeebeee')); // true


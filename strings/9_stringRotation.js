// Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").


// Checks whether s2 is substring of s1
const isSubstring = (s1, s2) => {
  if (s1.includes(s2)) { 
    return true;
  }
  return false;
};

// Checks whether s2 is rotation of s1
const isRotation = (s1, s2) => {
  if (!s1.length || !s2.length) { return false; }

  if (isSubstring(s1.repeat(2), s2)) { 
    return true;
  }
  return false;
};



console.log(isSubstring('waterbottle', 'bottle')); // true
console.log(isSubstring('waterbottle', 'chandler')); // false

console.log(isRotation('waterbottle', 'erbottlewat')); // true
console.log(isRotation('waterbottle', 'bottlewater')); // true
console.log(isRotation('waterbottle', 'blatterwater')); // false
console.log(isRotation('phone', 'eonph')); // false

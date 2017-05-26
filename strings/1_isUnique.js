/* Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? */


// Using additional data structure
// Time complexity: O(n)

const isUnique1 = str => {
  if (!str || str === '') { return null; }
  
  const strChars = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (!strChars[char]) { 
      strChars[char] = 1; 
    } else { 
      return false; 
    }
  }
  
  return true;
};


// Using no additional data structures
// Time complexity: O(n^2)
  
const isUnique2 = str => {
  if (!str || str === '') { return null; }
    
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(j) === str.charAt(i)) { 
        return false; 
      }
    }
  }
  return true;
};


/** Tests 1 **/
console.log(isUnique1('mom')); // false
console.log(isUnique1('padre')); // true
console.log(isUnique1('')); // null
console.log(isUnique1()); // null
console.log(isUnique1('---m')); // false

/** Tests 2 **/
console.log(isUnique2('mom')); // false
console.log(isUnique2('padre')); // true
console.log(isUnique2('')); // null
console.log(isUnique2()); // null
console.log(isUnique2('---m')); // false


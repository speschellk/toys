/* Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. */



// Implementation 1
// Time inefficient, but pleasing to human readers.

const isPermutation = (str, str2) => {
  if (!str2 || str.length !== str2.length) { return false; }

  let sortedStr = str.split('').sort().join();
  let sortedStr2 = str2.split('').sort().join();
  
  return Object.is(sortedStr, sortedStr2);
};


// Implementation 2
// Time complexity: O(n^2)

const isPermutation2 = (str, str2) => {
  if (!str2 || str.length !== str2.length) { return false; }
  
  for (let i = 0; i < str.length; i++) {
    if (!str2.includes(str.charAt(i))) { return false; }
  }

  return true;
};




/** Tests **/
console.log(isPermutation('padre', 'lop')); // false
console.log(isPermutation('can', 'naca')); // false
console.log(isPermutation('juice', '')); // false
console.log(isPermutation('padre', 'drape')); // true
console.log(isPermutation('can', 'ccn')); // false
console.log(isPermutation('juice')); // false

console.log(isPermutation2('padre', 'lop')); // false
console.log(isPermutation2('can', 'naca')); // false
console.log(isPermutation2('juice', '')); // false
console.log(isPermutation2('padre', 'drape')); // true
console.log(isPermutation2('can', 'ccn')); // false
console.log(isPermutation2('juice')); // false
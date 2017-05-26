/* One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away. */


const checkOneAway = (str, str2) => {
  if (!str2 || Math.abs(str.length - str2.length) > 1) { return false; }
  
  let countDiff = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (!str2.includes(str.charAt(i))) { 
      countDiff++; 
      if (countDiff > 1) { return false; }
    }
  }
  
  return true;
};



/** Tests **/
console.log(checkOneAway('pale', 'ple')); // true - insert/delete
console.log(checkOneAway('pales', 'pale')); // true - insert/delete
console.log(checkOneAway('pale', 'bale')); // true - replace
console.log(checkOneAway('pale', 'bake')); // false - replace
console.log(checkOneAway('pale', 'p')); // false
console.log(checkOneAway('pale', '')); // false
console.log(checkOneAway('moma', 'mtm')); // false - insert/delete
const _  = require('underscore');

/* Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. */


const isPalindrome = (str) => {
  if (!str || str === '') { return false; }

  let cache = cacheLetters(str);
  let count = 0;

  _.each(cache, (val) => {
    if (val % 2 !== 0) { count++; }
  });
  
  return count > 1 ? false : true;
};


const cacheLetters = (str) => {
  str = str.replace(/\s/, '').toLowerCase();
  let cache = {};

  _.each(str, (char) => {
    cache[char] = cache[char] ? cache[char] + 1 : 1;
  });

  return cache;
};


/** Tests **/ 
console.log(isPalindrome('mama')) // true
console.log(isPalindrome('suppose')) // false
console.log(isPalindrome('pl alp')) // true
console.log(isPalindrome('Tact Coa')) // true
console.log(isPalindrome('')) // false
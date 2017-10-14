/*
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. Dedup repeated strings.
 */

/**
  * example usage:
  * console.log(allAnagrams('abc');); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


function allAnagrams(string) {
  if (!string || !string.length) return null;
  let uniqueGrams = {};
  let count = 0;

  (function findAnagrams(gram, str) {
    if (!str.length && !uniqueGrams[gram]) uniqueGrams[gram] = true;

    for (let i = 0; i < str.length; i++) {
      findAnagrams(`${gram}${str[i]}`, `${str.slice(0, i)}${str.slice(i + 1)}`);
    }
  })('', string);

  return Object.keys(uniqueGrams);
};

console.log(allAnagrams('abc'));  // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
console.log(allAnagrams(''))      // null
console.log(allAnagrams('toto')); // ['toto', 'toot', 'ttoo', 'otto', 'otot', 'oott']
console.log(allAnagrams('abcde')); // [a lot]

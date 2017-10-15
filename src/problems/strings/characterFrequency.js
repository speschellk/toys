/*
 *  Write a function that takes as its input a string and returns an array of arrays
 *  sorted in descending order by frequency and then by ascending order by character.
 *
 */


// Time complexity: O(n^3) wrt str
// Space complexity: O(n)
function characterFrequency(str) {
  let charFreq = {};

  for (let char of str) { // O(n) wrt str
    charFreq[char] = charFreq[char] ? ++charFreq[char] : 1;
  }

  return bubbleSort(Object.entries(charFreq));
};

// Time complexity: O(n^2)
// Space complexity: O(1)
function bubbleSort(a) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i][1] < a[i + 1][1] || a[i][1] === a[i + 1][1] && a[i][0] > a[i + 1][0]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        swapped = true;
      }
    }
  } while(swapped);
  return a;
}

console.log(characterFrequency('mmmaaaiiibbb'));// [['a', 3],['b', 3],['i', 3],['m', 3]]
console.log(characterFrequency('miaaiaaippi')); // [['a', 4],['i', 4],['p', 2],['m', 1]]
console.log(characterFrequency('mississippi')); // [['i', 4],['s', 4],['p', 2],['m', 1]]

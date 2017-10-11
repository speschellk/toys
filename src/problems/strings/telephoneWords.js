/*
  * Write a function that takes up to four digits of a phone number, and returns a list of all of the  * words (all letter permutations) that can be written on the phone with that number.
  *
  * Example:
  *   telephoneWords('2745'); => ['APGJ','APGK','APGL',...,'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
*/

// I: 4-character string
// O: array of every permutation of letters
// C: keep given order, 4 chars in the string, 0s and 1s remain numbers, return not just English words
// E: no str passed in, str doesn't have four chars, str is all 1s or all 0s

const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

function telephoneWords(str) {
  if (!str || !str.length) return null;
  let words = [];

  function digitsToLetters(word, digits) {
    if (!digits.length) {
      return words.push(word);
    }
    let charSet = phoneDigitsToLetters[digits[0]];
    for (let char of charSet) {
      digitsToLetters(word + char, digits.slice(1));
    }
  }
  digitsToLetters('', str);

  return words;
}

// function telephoneWords(digitString) {
//   if (!digitString || digitString.length !== 4) return null;
//   let words = [];

//   function digitsToLetters(word, digits) {
//     // base case: no remaining digits
//     if (!digits.length) {
//       return words.push(word);                         // no digits remaining to iterate through
//     }
//     // recursive case: remaining digits
//     let chars = phoneDigitsToLetters[digits[0]];       // get corresponding chars
//     for (let char of chars) {                          // iterate through chars
//       digitsToLetters(word + char, digits.slice(1));  // add char to word, pass in rest digits
//     }
//   };
//   digitsToLetters('', digitString);                   // start recursive descent

//   return words;
// };

console.log(telephoneWords('2745'));      // ['APGJ','APGK','APGL',...,'CSIL']
// console.log(telephoneWords('1010'));      // [1010]
// console.log(telephoneWords('274535234')); // null
// console.log(telephoneWords());            // null
// console.log(telephoneWords(''));          // null
// console.log(telephoneWords('123'));       // null

// function telephoneWords(digitString) {
//   if (!digitString || digitString.length !== 4) return null;
//   let words = [];

//   function digitsToLetters(word, digits) {
//     if (!digits.length) return words.push(word);  // base case: no more digits

//     let chars = phoneDigitsToLetters[digits[0]];  // recursive case: more digits
//     for (let char of chars) {
//       digitsToLetters(word + char, digits.slice(1));
//     }
//   }
//   digitsToLetters('', digitString);

//   return words;
// }

// function telephoneWords(digitString) {
//   if (!digitString || !digitString.length) return null;
//   let words = [];

//   function digitsToLetters(word, digits) {
//     if (!digits.length) return words.push(word);

//     let charSet = phoneDigitsToLetters[digits[0]];
//     for (let char of charSet) {                           // O(n) wrt charSet (4)
//       digitsToLetters(`${word}${char}`, digits.slice(1)); // O(n) wrt digitString
//     }
//   }
//   digitsToLetters('', digitString);

//   return words;
// }

// time complexity of this solution: O(n + c) where n is digitString and c is charSet
// space complexity of this solution: O(n) for callstack

function telephoneWords(digitString) {
  if (!digitString || !digitString.length) return null;

  let words = [];
  let count = 0;

  function digitsToLetters(word, digits) { // O(n^2) wrt digitString
    if (!digits.length) {
      return words.push(word);
    }

    let charSet = phoneDigitsToLetters[digits[0]];
    for (let char of charSet) { // call 3 or 4 times
      digitsToLetters(`${word}${char}`, digits.slice(1));
    }
  }
  digitsToLetters('', digitString);

  return words;
}


function telephoneWords(digitString) {
  if (!digitString || !digitString.length) return null;
  let words = []; // store results

  function digitsToLetters(word, digits) { // recursive function that descends through digits
    // base case: no more digits
    if (!digits.length) {
      return words.push(word); // push completed word into words array and return from recursive func
    }
    // recursive case: more digits
    let charSet = phoneDigitsToLetters[digits[0]];
    for (let char of charSet) {
      digitsToLetters(`${word}${char}`, digits.slice(1));
    }
  }
  digitsToLetters('', digitString);

  return words;
}

// const plays = ['rock', 'paper', 'scissors'];

// function rockPaperScissors(rounds) {
//   if (!rounds) return [];
//   let combos = [];

//   function generateCombos(roundsLeft, play = []) {
//     if (!roundsLeft) {
//       return combos.push(play)
//     }
//     for (let choice of plays) {
//       generateCombos(roundsLeft - 1, play.concat(choice));
//     }
//   }
//   generateCombos(rounds);

//   return combos;
// }

console.log(rockPaperScissors(3));


function rockPaperScissors(rounds) {
  if (!rounds) return [];
  let combos = [];
  const plays = ['rock', 'paper', 'scissors'];

  function generatePlays(roundsLeft, play) {
    if (!roundsLeft) {
      return combos.push(play);
    }
    for (let choice of plays) { // 'rock'
      generatePlays(roundsLeft - 1, play.concat(choice)); // play = ['rock']
    }
  }
  generatePlays(rounds, []);

  return combos;
}



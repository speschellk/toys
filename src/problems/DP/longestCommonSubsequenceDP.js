/*
  Given two string sequences, find the longest subsequence present in both of them. A subsequence is a sequence of characters that appear in the same order, but not necessarily contiguously.

  example:
  'abcdefg', 'abxdfg' // 'abdfg'
*/

function lcs(sub1, sub2) {
  let matrix = [];

  for (let i = 0; i < sub1.length; i++) {
    for (let j = 0; j < sub2.length; j++) {
      if (!matrix[i]) {
        matrix[i] = [0];
      }
      if (!matrix[i][j]) {
        matrix[i][j] = 0;
      } else if (sub1[i - 1] === sub2[j - 1]) {
        matrix[i][j] = ++matrix[i][j];
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  return matrix[sub1.length - 1][sub2.length - 1];
}

console.log(lcs('abcdefg', 'abxdfg'));  // 'abdfg'
console.log(lcs('abcdefg', 'abcdefg')); // 'abcdefg'
console.log(lcs('abcdefg', 'gfed'));    // ''

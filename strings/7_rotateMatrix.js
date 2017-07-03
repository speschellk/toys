// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?


/* 3x3 matrix

[ ['a','b','c'],
  ['d','e','f'],
  ['g','h','i'] ]

*/

/* rotated 90 degrees

[ ['g','d','a'],
  ['h','e','b'],
  ['i','f','c'] ]

*/


const rotateMatrix = (matrix) => {
  if (!matrix.length || matrix.length !== matrix[0].length) { return null; }
  let n = matrix.length;

  for (let row = 0; row < n / 2; row++) {
    let first = row;
    let last = n - 1 - row;

    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i]; // top

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last-offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }
  return matrix;
};

var matr = [ ['a','b','c'], ['d','e','f'], ['g','h','i'] ];
console.log(rotateMatrix(matr)); // [ ['g','d','a'], ['h','e','b'], ['i','f','c'] ]


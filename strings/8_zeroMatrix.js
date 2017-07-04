// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

/* 

3x3 matrix

[ [1, 0, 1],
  [2, 2, 2,],
  [0, 1, 0] ]

4x3 matrix

[ [1, 0, 1, 2],
  [2, 2, 2, 2],
  [0, 1, 0, 2] ]

1x1 matrix

[ [1] ]

2x4 matrix

[ [1, 0],
  [2, 2],
  [3, 1],
  [3, 3] ]

*/


const zeroMatrix = (matrix) => {
  if (!matrix.length) { return null; }
  let zeroCols = new Map();
  let zeroRows = new Map();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {  
      if (matrix[row][col] === 0) {
        zeroRows.set(row, true);
        zeroCols.set(col, true);
      }
    }
  }

  for (let col = 0; col < matrix[0].length; col++) {
    if (zeroCols.get(col)) {
      for (let row = 0; row < matrix.length; row++) {
        if (zeroRows.get(row)) {
          matrix[row] = matrix[row].map((el) => { return 0; });
        }
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};


console.log(zeroMatrix([ [1, 0, 1], [2, 2, 2,], [0, 1, 0] ])); // [ [0,0,0], [0,0,0], [0,0,0] ]
console.log(zeroMatrix([ [1, 0, 1, 2], [2, 2, 2, 2], [0, 1, 0, 2] ])); // [ [0,0,0,0], [0,0,0,2], [0,0,0,0] ]
console.log(zeroMatrix([ [1] ])); // [ [1] ]
console.log(zeroMatrix([ [1, 0], [2, 2], [1, 1], [3, 3] ])); // [ [0, 0], [2, 0], [1, 0], [3, 0] ]

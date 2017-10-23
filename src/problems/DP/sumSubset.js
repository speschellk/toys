/* Return a boolean indicating whether there is a non-empty subset of a given set that will add
up to a given sum. */

function sumSubset(set, sum) {
  if (!set.length || sum < 0) return false;

  let newVal;
  let m = makeMemoMatrix(set, sum);

  for (let row = 1; row < set.length; row++) {
    newVal = set[row];
    for (let col = 0; col <= sum; col++) {
      determineCell(m, row, col, newVal);
    }
  }
  return m[set.length - 1][sum];
}

function determineCell(m, row, col, val) {
  if (val > col) {
    m[row][col] = m[row - 1][col];
  } else if (col === val) {
    m[row][col] = true;
  } else {
    let diff = col - val;
    m[row][col] = m[row - 1][col] || m[row - 1][diff];
  }
}

function makeMemoMatrix(set, sum) {
  let matrix = [];
  for (let row = 0; row < set.length; row++) {
    matrix.push([]);
  }
  for (let col = 0; col <= sum; col++) {
    if (col > set[0]) {
      matrix[0][col] = false;
    } else if (col === set[0]) {
      matrix[0][col] = true;
    }
  }
  return matrix;
}

let set = [0, 1, 2, 5, 7];
let set2 = [0,0,0,0,0];
console.log(sumSubset([])); // false
console.log(sumSubset(set, -1)); // false
console.log(sumSubset(set, 0)); // true
console.log(sumSubset(set, 3)); // true
console.log(sumSubset(set, 8)); // true
console.log(sumSubset(set, 9)); // true
console.log(sumSubset(set, 16)); // false
console.log(sumSubset(set2, 5)); // false

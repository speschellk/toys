
function knapsack(a, vals, sum) {
  if (!a || !a.length || sum < 0) return null;

  let m = memoMatrix(a, sum);
  let newWeight;

  for (let row = 0; row < a.length; row++) {
    newWeight = a[row];
    for (let col = 0; col <= sum; col++) {
      if (newWeight > col) {
        if (row === 0) {
          m[row][col] = 0;
        } else {
          m[row][col] = m[row - 1][col];
        }
      } else {
        if (row === 0) {
          m[row][col] = vals[row];
        } else {
          let diff = col - newWeight;
          m[row][col] = Math.max(m[row - 1][col], vals[row] + m[row - 1][diff]);
        }
      }
    }
  }
  console.log(m);
  return m[a.length - 1][sum];
}

function memoMatrix(a, sum) { // O(a.length * sum)
  let m = [];

  for (let row = 0; row < a.length; row++) { // O(a)
    m.push([]);
    for (let col = 0; col <= sum; col++) {     // O(sum)
      if (col === 0) {
        m[row][col] = 0;
      }
    }
  }
  return m;
}

let weights = [1,2,3,4,5];
let values = [1,4,4,5,7];
let sum = 9;
console.log(knapsack(weights, values, sum));

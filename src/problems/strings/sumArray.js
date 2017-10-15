/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solve in O(n) time with O(1) memory
function sumArray(array) {
  let sum = 0;
  let tempSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      if (i === array.length - 1) {
        return sum;
      } else if (Math.abs(array[i]) > sum) {
        tempSum = sum;
        sum = 0;
      } else {
        sum += array[i];
      }
    } else {
      sum += array[i];
    }
  }
  return tempSum > sum ? tempSum : sum;
};

// same time and space complexities, but cleaner!
// no checking length of array numerous times
function sumArray(array) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  for (let num of array) {
    currentSum += num;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

console.log(sumArray([1, 2, 3]));        // 6 -- add all
console.log(sumArray([1, 2, 3, -4]));    // 6 -- exclude final (negative) number
console.log(sumArray([1, 2, 3, -4, 5])); // 7 -- add all, even though one is negative
console.log(sumArray([4, -1, 5]));       // 8 -- add all, even though one is negative
console.log(sumArray([10, -11, 11]));    // 11 -- sum dips below 0, greatest sum is after that
console.log(sumArray([10, -11, 9]));     // 10 -- sum dips below 0, greatest sum was before that

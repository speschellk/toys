/*
Given an array of random numbers, push all the zeroes of in the array to the end of the array. All other element positions should remain unchanged. Expected time complexity is O(n) and extra space is O(1).

Example:
let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
zeroesEnd(arr); // [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]

I: array
O: same array, with 0's moved to end
C: position of all other values must be unchanged
   O(n) time complexity - must swap in place during single iteration
     - bubble or insertion sort when nearly sorted, quicksort when unique keys
   O(1) extra space - can't use additional data structure
E: all 0's
   no 0's
   empty array
   no array passed in
*/

// function zerosEnd(a) {
//   if (!a || !a.length) return null;

//   let len = a.length;
//   let indexOfTrue;
//   a.push(true);

//   for (let i = 0; i < len && a[i] !== true; i++) {
//     if (a[i] === 0) {
//       a.splice(i, 1);
//       a.push(0);
//       i--;
//       indexOfTrue = i;
//     }
//   }

//   a.splice(indexOfTrue + 1, 1);
//   return a;
// }

// function zerosEnd(a) {
//   if (!a || !a.length) return null;

//   let len = a.length; // length of original array
//   let nonzeroCount = 0;      // will count all values that are not 0

//   for (let i = 0; i < a.length; i++) { // iterate through array
//     if (a[i] !== 0) {                  // if value at this position is not 0
//       a[nonzeroCount++] = a[i];        // set array (nonzero count) to this value
//     }                                  // if value at this position IS 0, then nothing happens,
//                                        // so that if a nonzero value follows, the previous 0 will be overwritten by the nonzero value
//   }
//   while (nonzeroCount < len) {         // if we encountered any zeros in the array, then nonzeroCount                                          will be less than the length of the array.
//     a[nonzeroCount++] = 0;             // for the remainder of the array length, add 0s to the end!
//   }

//   return a;
// }


// let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
// console.log(zerosEnd(arr)); // [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]
// console.log(zerosEnd([]));  // null
// console.log(zerosEnd());    // null
// console.log(zerosEnd([0,0,0,0,0])); // [0, 0, 0, 0, 0]


function threesToEnd(a) {
  if (!a || !a.length) return null;
  let nonthreeCount = 0;

  for (let value of a) {
    if (value !== 3) {
      a[nonthreeCount++] = value;
    }
  }

  while (nonthreeCount < a.length) {
    a[nonthreeCount++] = 3;
  }
  return a;
}

let a = [1, 9, 3, 4, 0, 0, 2, 3, 0, 6, 0];
console.log(threesToEnd(a));
console.log(threesToEnd([]));  // null
console.log(threesToEnd());    // null
console.log(threesToEnd([3,3,3,3,3]));

function zerosToEnd(arr) {
  if (!arr || !arr.length) return null;
  let nonzeroCount = 0;

  for (let value of arr) {
    if (value !== 0) {
      arr[nonzeroCount++] = value;
    }
  }

  while (nonzeroCount < arr.length) {
    arr[nonzeroCount++] = 0;
  }
}

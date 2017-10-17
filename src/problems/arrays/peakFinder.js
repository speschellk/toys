// peak finder
// I: array of numbers, length 10
// O: array of peaks
// C: peak is a number that is greater than or equal to both its neighbors
// E: what about first and last? are they peaks if they are greater than their one neighbor?

// naive - O(n)
// function peakFinder(a) {
//   if (!a || !a.length) return null;

//   for (let i = 0; i < a.length; i++) { // O(n) time complexity
//     if (i === 0 && a[i] > a[i + 1]) {
//       return a[i];
//     } else if (i === a.length - 1 && a[i] > a[i - 1]) {
//       return a[i];
//     } else if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
//       return a[i];
//     }
//   }
//   return null;
// }

console.log(peakFinder([])); // null
console.log(peakFinder([5, 4, 3, 2, 1, 2, 3, 4, 5, 6])); // 5 or 6
console.log(peakFinder([1, 2, 1, 2, 1, 2, 1, 2, 1, 2])); // 2
console.log(peakFinder([1, 2, 3, 4, 5, 4, 3, 2, 1, 0])); // 5
console.log(peakFinder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10 (O(n) case)


// binary search implementation
// Time complexity: O(log n)
// Space complexity: O(n) (slices array)
function peakFinder(a) {
  if (!a || !a.length) return null;

  while (a.length) {
    let mid = Math.floor(a.length / 2);

    if (a[mid] <= a[mid - 1]) {
      a = a.slice(0, mid);
    } else if (a[mid] <= a[mid + 1]) {
      a = a.slice(mid);
    } else {
      return a[mid];
    }
  }

  return null;
}

// sum to zero
// given a sorted array, determine whether three of the elements sum to 0

// example: [-10, -8, -5, -2, 0, 1, 2, 4, 7, 100]

function sumToZero(a) {
  if (!a || !a.length) return null;
  if (a[0] > 0 || a[a.length - 1] <= 0) return false;

  let i = 0;
  let j = a.length - 1;
  let tmpi;
  let tmpj;
  let diff;
  let mid;

  while (true) {
    diff = 0 - a[i] - a[j];
    if (diff > a[j]) {
      if (++i === a.length) break;
    } else if (diff < a[i]) {
      if (--j <= i) break;
    } else {
      tmpi = i;
      tmpj = j;
      while (i !== j && j - i !== 1) {
        mid = Math.floor((j - i) / 2) + i;
        if (diff < a[mid]) {
          j = mid;
        } else if (diff > a[mid]) {
          i = mid;
        } else {
          return true;
        }
      }
      i = ++tmpi;
      j = tmpj;
    }
  }
  return false;
}

let arr = [-100, -80, -60, -40, -20, -5, 0, 10];
console.log(sumToZero(arr)); // true;


function maxProductOfThree(nums) {
  if (!nums || nums.length < 3) return null;

  let min1 = min2 = Number.POSITIVE_INFINITY;
  let max1 = max2 = max3 = Number.NEGATIVE_INFINITY;

  for (let n of nums) {
    if (n <= min1) {
      min2 = min1;
      min1 = n;
    } else if (n <= min2) {
      min2 = n;
    }
    if (n >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n >= max2) {
      max3 = max2;
      max2 = n;
    } else if (n >= max1) {
      max3 = n;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}

console.log(maxProductOfThree()) // null
console.log(maxProductOfThree([])) // null
console.log(maxProductOfThree([1, 2])) // null
console.log(maxProductOfThree([2, 1, 3, 7])) // 42
console.log(maxProductOfThree([-2, -1, 3, 7])) // 14
console.log(maxProductOfThree([-1, -2, -3])) // -6

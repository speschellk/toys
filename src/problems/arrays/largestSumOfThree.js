function largestSumOfThree(nums) {
  if (!nums || nums.length < 3) return null;

  let max1 = max2 = max3 = Number.NEGATIVE_INFINITY;

  for (let n of nums) {
    if (n >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n >= max2) {
      max3 = max2;
      max2 = n;
    } else if (n >= max3) {
      max3 = n;
    }
  }
  return max1 + max2 + max3;
}

console.log(largestSumOfThree()); // null
console.log(largestSumOfThree([])); // null
console.log(largestSumOfThree([1,2])); // null
console.log(largestSumOfThree([2,3,1])); // 6
console.log(largestSumOfThree([3, 2, 4, 1])); // 9
console.log(largestSumOfThree([-2, -5, -3, -1, -4])); // -6
console.log(largestSumOfThree([8, -2, 6, 10])); // 24

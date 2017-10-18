function lis(arr) {

  let lis = [1];
  let max = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {

      if (!lis[i]) {
        lis[i] = 1;
      }

      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = ++lis[j];
        if (lis[i] > max) {
          max = lis[i];
        }
      }
    }
  }
  return max;
}

console.log(lis([10, 22, 9, 33, 21, 50, 41, 60]));

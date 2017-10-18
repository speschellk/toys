// fibonacci with DP solution

function fibDPtab(n) {
  let f = [0, 1];
  let i;
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

function fibDP(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibDP(num - 1, memo) + fibDP(num - 2, memo);
}

function fibLoop(n) {
  var a = 1, b = 0, temp;

  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

function fibRecursion2(n){
  return (function innerFib(a, b, n) {
    if(n) { return innerFib(b, a + b, n-1) }
    else  { return a }
  })(0, 1, n)
}

// function fibRecursion3(a, b, n) {
//   if(n) {
//     return fibRecursion3(b, a + b, n - 1);
//   } else {
//     return a;
//   }
// }

// function fibRecursion(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibRecursion(n - 1) + fibRecursion(n - 2);
//   }
// }

console.time('fibDPtab');
fibDPtab(200);
console.timeEnd('fibDPtab');

console.time('fibRecursion2');
fibRecursion2(200);
console.timeEnd('fibRecursion2');

console.time('fibDP');
fibDP(200);
console.timeEnd('fibDP');

console.time('fibLoop');
fibLoop(200);
console.timeEnd('fibLoop');

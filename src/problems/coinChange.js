function coinChange(amount, coinList) {
  let combinations = []; // will store the combinations for each amount

  combinations[0] = 1;   // # of combinations for amount 0 = 1

  for (let coin of coinList) { // for each coin in list
    for (let i = 1; i < amount + 1; i++) { // iterate through each amount in combinations
      if (i >= coin) {
        if (!combinations[i]) {
          combinations[i] = 0;
        }
        combinations[i] += combinations[i - coin];
      }
    }
  }

  return combinations[amount];
}

function coinChange(amount, coinList) {
  let combinations = [];

  for (let coin of coinList) { // O(c) wrt coinList
    for (let i = 1; i < amount + 1; i++) { // O(a) wrt amount
      if (i >= coin) {
        if (!combinations[i]) {
          combinations[i] = 0;
        }
        combinations[i] += combinations[i - coin]; // combinations[i - coin] is the number of combinations for everything below that. like fibonacci sequence: if something can be made from the items below it, then it has all of those combinations PLUS additional ones
      }
    }
  }
  return combinations[amount];
}
// time complexity = O(ac) => O(n^2)

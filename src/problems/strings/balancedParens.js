/*
Given a string, return true if it contains balanced parentheses.

Examples:
balancedParens('(');  // false
balancedParens('()'); // true
balancedParens(')(');  // false
balancedParens('(())');  // true

I: string
O: boolean indicating whether or not parens are balanced
C: there may be characters in the string that are not parens. time complexity? space complexity?
E: no input, empty string, no parens at all, all parens
*/

function balancedParens(str) {
  if (!str || !str.length) return null;
  let parenStack = [];

  for (let char of str) {
    if (char === '(') {
      if (parenStack.length && parenStack[parenStack.length - 1] === ')') {
        parenStack.pop();
      } else {
        parenStack.push(char);
      }
    }
    if (char === ')') {
      if (!parenStack.length) {
        return false;
      } else if (parenStack[parenStack.length - 1] === '(') {
        parenStack.pop();
      } else {
        parenStack.push(char);
      }
    }
  }
  return parenStack.length ? false : true;
}

console.log(balancedParens());   // null
console.log(balancedParens('')); // null
console.log(balancedParens('('));     // false
console.log(balancedParens('()'));    // true
console.log(balancedParens(')('));    // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens('(a(bsdf)wtw)'));  // true
console.log(balancedParens('(a)bsdf)wtw)'));  // true

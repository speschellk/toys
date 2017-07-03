/* Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). */


const compressString = (str) => {
  if (!str || !str.length) { return null; }

  let count = 0;
  let prev = char = str.charAt(0).toLowerCase();
  let inventory = [char];

  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i).toLowerCase();

    if (prev === char) {
      count++;
    } else {
      inventory.push(count, char);
      prev = char;
      count = 1;
    }
  }

  inventory.push(count);
  
  return str.length <= inventory.length ? str : inventory.join('');
};


/** Tests **/
console.log(compressString('aabcccccaaa')); // a2b1c5a3
console.log(compressString('')); // null
console.log(compressString('AaAa')); // a4
console.log(compressString('jjjc')); // jjjc
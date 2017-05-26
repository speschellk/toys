/*Write a method to replace all spaces in a string with '%20.*/


const replace = (str) => { return str.replace(/\s/g, '%20'); };


/* Tests */
console.log(replace('The setup was perfect')); // 'The%20setup%20was%20perfect'
console.log(replace(' ')); // '%20'
console.log(replace('thishasnospaces')); // 'thishasnospaces'
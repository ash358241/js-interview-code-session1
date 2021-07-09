//remove falsy values from arrays
//info: 6 falsy values--> false, zero, null, undefined, blank, NAN 

let Miscellaneous = ['🍌', '🥭', NaN, undefined, 0, null, ''];

let fruits = Miscellaneous.filter(Boolean);

console.log(fruits);
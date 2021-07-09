//how to flatten a multidimensional array
let smileys = ['🥰', ['😄', '😃'], '😉', ['😃', '😑']]; //multidimensional array 
console.log(smileys.flat());

// Multi level array
let smileys2 = ['🥰', ['😄', '😃', ['🥲', '😑']], '😉'];

// We can pass 'Infinity' parameter to array.flat function
console.log(smileys2.flat(Infinity)); // ['🥰', '😄', '😃', '🥲', '😑', '😉']

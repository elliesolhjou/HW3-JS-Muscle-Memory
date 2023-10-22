/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

const cat1 = catBuilder('Garfield', 'golden', ['scratching-post', 'yarn']);
cat1; // => { name: 'Garfield', color: 'golden', toys: ['scratching-post', 'yarn'] }

const cat2 = catBuilder('Whiskers', 'rainbow', ['poptarts']);
cat2; // => { name: 'Whiskers', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

function catBuilder(name, color, toys) {
  cat = {};
  cat.name = name;
  cat.color = color;
  cat.toys = toys;
  return cat;
}

const cat2 = catBuilder("Whiskers", "rainbow", ["poptarts"]);
const catie = catBuilder("Garfield", "golden", ["scratching-post", "yarn"]);
console.log(catie);
console.log(cat2);
module.exports = catBuilder;

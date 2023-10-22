/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];

adults(ppl); // => [ 'Khalid Robinson', 'Ariel Winter', 'Post Malone' ]
***********************************************************************/

function adults(people) {
  let pplNames = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      pplNames.push(people[i].name);
    }
  }
  return pplNames;
}

module.exports = adults;

const ppl = [
  { name: "Khalid Robinson", age: 22 },
  { name: "Ariel Winter", age: 20 },
  { name: "Post Malone", age: 25 },
  { name: "Willow Smith", age: 17 },
];

console.log(adults(ppl));

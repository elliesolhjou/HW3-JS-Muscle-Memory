/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

const obj1 = {company: 'General Assembly', course: 'Software Engineering Immersive'}
doesKeyExist(obj1, 'company'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/
function doesKeyExist(obj, key) {
  if (obj[key]) {
    return true;
  } else {
    return false;
  }
}
const obj1 = {
  company: "General Assembly",
  course: "Software Engineering Immersive",
};
console.log(doesKeyExist(obj1, "company")); // => true
console.log(doesKeyExist(obj1, "name")); // => false
module.exports = doesKeyExist;

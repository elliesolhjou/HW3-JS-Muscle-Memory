// /***********************************************************************
// In these exercises we will be practicing decomposition by building
// multiple functions. Be sure to test each function thoroughly as you go
// before moving on to the next problem. Each function will require the
// previous to solve.
// ***********************************************************************/

const { first } = require("lodash");

// /***********************************************************************
// Write a function `isPrime(number)` that returns a boolean indicating if
// `number` is prime or not. Assume `number` is a positive integer.

// Examples:

// isPrime(2); // => true
// isPrime(1693); // => true
// isPrime(15); // => false
// isPrime(303212); // => false
// ***********************************************************************/

console.log("it is working");

function isPrime(number) {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrime(27));
// /***********************************************************************
// Using the `isPrime` function you made, write a function `firstNPrimes(n)`
// that returns an array of the first `n` prime numbers.

// Examples:

// firstNPrimes(0); // => []
// firstNPrimes(1); // => [2]
// firstNPrimes(4); // => [2, 3, 5, 7]
// ***********************************************************************/

function firstNPrimes(n) {
  let myArray = [];
  let counter = 1;
  while (myArray.length < n) {
    if (isPrime(counter)) {
      myArray.push(counter);
    }
    counter++;
  }
  return myArray;
}
console.log(firstNPrimes(7));

// /***********************************************************************
//  Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
// the sum of the first `n` prime numbers.

// Examples:

// sumOfNPrimes(0); // => 0
// sumOfNPrimes(1); // => 2
// sumOfNPrimes(4); // => 17
// ***********************************************************************/
function sumOfNPrimes(n) {
  let myPrimes = firstNPrimes(n);
  let mySum = myPrimes.reduce((acc, prime) => acc + prime, 0);
  return mySum;
}
console.log(sumOfNPrimes(4));
// module.exports = { firstNPrimes, isPrime, sumOfNPrimes };

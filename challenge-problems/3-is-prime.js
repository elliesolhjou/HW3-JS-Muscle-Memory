/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/

function isPrime(number) {
  for (let i = 2; i <= number; i++) {
    if (number === 1 || number === 2 || i === number) {
      return true;
    } else if (number % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPrime(2017));
module.exports = isPrime;

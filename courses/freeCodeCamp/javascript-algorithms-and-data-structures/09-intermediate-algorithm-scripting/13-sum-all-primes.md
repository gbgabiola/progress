# [Intermediate Algorithm Scripting: Sum All Primes](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes)

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

## Solution 1
```js
// Basic Code: Using for loop and push
function sumPrimes(num) {
  let res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    const sieve = [];
    const primes = [];
    for (let i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (let j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }

  // Add the primes
  const primes = getPrimes(num);
  for (let k = 0; k < primes.length; k++) {
    res += primes[k];
  }
  return res;
}

sumPrimes(10); // 17
```

## Solution 2

```js
// Intermediate Code: Using for loop and function recursion
function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number) {
    for (let i = 2; i <= number; i++) {
      if (number % i === 0 && number!= i) {
      // return true if it is divisible by any number that is not itself.
        return false;
      }
    }
    // if it passes the for loops conditions it is a prime
    return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1) {
    return 0;
  }
  // Check if your number is not prime
  if (isPrime(num) === false) {
    // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }
  // Check if your number is prime
  if (isPrime(num) === true) {
    // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}

sumPrimes(10); // 17
```

## Solution 3
```js
// Advanced Code: Using while loop, from, filter, and arrow functions
function sumPrimes(num) {
  let arr = Array.from({length: num + 1}, (v, k) => k).slice(2); 

  let onlyPrimes = arr.filter( (n) => { 
    let i = n - 1;
    while (i > 1 && i >= Math.sqrt(n)) { 
      if ((n % i) === 0) 
        return false;
        i--;
    }
    return true;
  });
  return onlyPrimes.reduce((a, b) => a + b); 
}

sumPrimes(10); // 17
```
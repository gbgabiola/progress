# [JavaScript Algorithms and Data Structures Projects: Telephone Number Validator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)

Return `true` if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

```js
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf`. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is `1`. Return `true` if the string is a valid US phone number; otherwise return `false`.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Try to pair program. Write your own code.

## Setup
```js
function telephoneCheck(str) {
  // Good luck!
  return true;
}

telephoneCheck("555-555-5555");
```

## Solution 1
```js
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555"); // true
```

## Solution 2
```js
function telephoneCheck(str) {
  if (str.length < 10 || str.length > 16 || str[0] == 2 || str[1] == 2 || (str.indexOf('(', 0) >= 0 != str.indexOf(')', 0) > 0)) {
    return false;
  }
  if ((str.split('').map(function(x) {
    if (Number(x) > 0) {
      return Number(x);
    } else {
      return x;
    }
  }).every(x => typeof(x) == 'number' || x === ' ' || x === '(' || x === ')' || x === '-')) == true) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555"); // true
```

## Solution 3
```js
function telephoneCheck(str) {
  return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}

telephoneCheck("555-555-5555"); // true
```
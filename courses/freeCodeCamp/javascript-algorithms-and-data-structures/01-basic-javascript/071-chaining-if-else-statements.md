# [Chaining If Else Statements](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements)

`if/else` statements can be chained together for complex logic. Here is _pseudocode_ of multiple chained `if` / `else if` statements:

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

---

Write chained `if` / `else if` statements to fulfill the following conditions:

`num < 5` - return "Tiny";  
`num < 10` - return "Small";  
`num < 15` - return "Medium";  
`num < 20` - return "Large";  
`num >= 20` - return "Huge";


## Setup

```js
function testSize(num) {
  // Only change code below this line 
  return "Change Me";
  // Only change code above this line
}
// Change this value to test
testSize(7);
```

## Solution

```js
if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  
testSize(7); // "Small"
```
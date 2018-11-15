# [Adding a Default Option in Switch Statements](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements)

In a `switch` statement you may not be able to specify all possible values as `case` statements. Instead, you can add the `default` statement which will be executed if no matching `case` statements are found. Think of it like the final `else` statement in an `if/else` chain.

A `default` statement should be the last case.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

---

Write a switch statement to set `answer` for the following conditions:

`"a"` - "apple"  
`"b"` - "bird"  
`"c"` - "cat"  
`default` - "stuff"

## Setup

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  // Only change code above this line
  return answer;
}
// Change this value to test
switchOfStuff(1);
```

## Solution

```js
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
}

// Change this value to test
switchOfStuff(1); // "stuff"
```

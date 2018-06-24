# [Basic JavaScript: Replacing If Else Chains with Switch](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch)

If you have many options to choose from, a `switch` statement can be easier to write than many chained `if` / `else if` statements. The following:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

can be replaced with:

```js
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

---

Change the chained `if` / `else` if statements into a switch statement.

```js
function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case "bob":
        answer = "Marley";
        break;
    case 42:
        answer = "The Answer";
        break;
    case 1:
        answer = "There is no #1";
        break;
    case 99:
        answer = "Missed me by this much!";
        break;
    case 7:
        answer = "Ate Nine";
  }
  return answer;  
}

// Change this value to test
chainToSwitch(7); // "Ate Nine"
```

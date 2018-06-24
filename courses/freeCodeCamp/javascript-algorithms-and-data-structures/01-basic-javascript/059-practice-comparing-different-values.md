# [Basic JavaScript: Practice comparing different values](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values)

In the last two challenges, we learned about the equality operator ( `==` ) and the strict equality operator ( `===` ). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equalty operator will compare both the data type and value as-is, without converting one type to the other.

**Examples**

```
3 == '3' // returns true because JavaScript performs type converstion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
```

**Note**  
In JavaScript, you can determine the type of a variable or a value with the `typeof` operator, as follows:

```js
typeof 3 // returns 'number'
typeof '3' // returns 'string'
```

---

The `compareEquality` function in the editor compares two values using the `equality operator`. Modify the function so that it returns "Equal" only when the values are strictly equal.

```js
// Setup
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10"); // "Not Equal"
```
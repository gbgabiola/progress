# [Basic JavaScript: Understanding Case Sensitivity in Variables](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-case-sensitivity-in-variables/)

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you _do not_ use this language feature.

**Best Practice**  
Write variable names in JavaScript in _camelCase_. In _camelCase_, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

**Examples:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

---

Modify the existing declarations and assignments so their names use _camelCase_.
Do not create any new variables.

```js
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
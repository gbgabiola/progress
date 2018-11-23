# [ES6: Create an Export Fallback with export default](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/create-an-export-fallback-with-export-default)

In the `export` lesson, you learned about the syntax referred to as a _named export_. This allowed you to make multiple functions and variables available for use in other files.

There is another `export` syntax you need to know, known as _export default_. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Here is a quick example of `export default`:

```js
export default function add(x,y) {
  return x + y;
}
```

Note: Since `export default` is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use `export default` with `var`, `let`, or `const`

---

The following function should be the fallback value for the module. Please add the necessary code to do so.

## Setup
```js
"use strict";
function subtract(x,y) {return x - y;}
```

## Solution
```js
"use strict";

export default function subtract(x,y) {return x - y;}
```
# [ES6: Import a Default Export](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/import-a-default-export)

In the last challenge, you learned about `export default` and its uses. It is important to note that, to import a default export, you need to use a different `import` syntax.

In the following example, we have a function, `add`, that is the default export of a file, `"math_functions"`. Here is how to import it:

```js
import add from "math_functions";
add(5,4); //Will return 9
```

The syntax differs in one key place - the imported value, `add`, is not surrounded by curly braces, `{}`. Unlike exported values, the primary method of importing a default export is to simply write the value's name after `import`.

---

In the following code, please import the default export, `subtract`, from the file `"math_functions"`, found in the same directory as this file.

## Setup
```js
"use strict";
subtract(7,4);
```

## Solution
```js
"use strict";

import subtract from "math_functions";

subtract(7,4);
```
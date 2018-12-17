# JavaScript Basics: Control Flow

## Objectives
- Evaluate complex logical expressions
- Write 3-part JS conditional statements
- Write JS _while_ loops and _for_ loops
- Translate between _while_ and _for_ loops
- Exercise: bouncer, while-loops, for-loops


### Boolean Logic
- Everything starts with the idea that statement is either True or False
- Then we can combine those initial statements to create more complex statements that also evaluate to True or False

#### Comparison Operators
Assuming `x = 5`
| Operator   | Name                     | Example      | Result |
| ---------- | ------------------------ | ------------ | ------ |
| `>`        | Greater than             | `x > 10`     | false  |
| `>=`       | Greater than or equal to | `x >= 5`     | true   |
| `<`        | Less than                | `x < -50`    | false  |
| `<=`       | Lesss than or equal to   | ` x <= 100`  | true   |
| `==`       | Equal to                 | ` x == "5"`  | true   |
| `!=`       | Not equal to             | ` x != "b"`  | true   |
| `===`      | Equal value and type     | `x === "5"`  | false  |
| `!==`      | Not equal value or type  | `x !== "5"`  | true   |

#### Equality Operators:*
"`==`" performs _type coercion_, while "`===`" does not.

#### Logical Operators
Assuming `x = 5` and `y = 9`
| Operator   | Name | Example            | Result |
| ---------- | ---- | ------------------ | ------ |
| `&&`       | AND  | `x < 10 && !== 5`  | false  |
| `||`       | OR   | `y > 9 || x === 5` | true   |
| `!`        | NOT  | `!(x === y)`       | true   |

#### Truthy and Falsy Values
Values that aren't actually _true_ or _false_, are still inherently "truthy" or "falsy" when evaluated in a boolean context.

Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`, and everything else is Truthy


### Conditionals
- **While Loops** repeat code while a condition is true
  ```js
  while (someCondition) {
    // run some code
  }
  ```
- **Infinite loops** occur when the terminating condition in loop is never false
  ```js
  var count = 0;
  while (count < 10) {
    console.log(count);
  }
  // This prints "0" over and over because count is never incremented
  ````
- **For Loops**
  ```js
  for (init; condition; step) {
    // run some code
  }
  ```

## Learned
- Boolean Logic
- Comparison Operators
- Logical Operators
  - Falsy and Truthy
- Conditionals
- using `typeof` and `Number()`
- Loops
  - Understand the purpose of _while_ and _for_ loops
  - "DRY": Don't Repeat Yourself
  - Write simple and valid _while_ and _for_ loops
  - Beware of **Infinite loops**
  - difference between the _while_ and _for_ loops
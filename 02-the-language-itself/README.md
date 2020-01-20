# The 10 Days of JavaScript: The Language Itself

## Day 1: Getting Started

- JavaScript is bigger than the web browser.
- **String** is a text like name, word, sentence or even paragraph wrap in a single (`'`) or double (`"`) quotes.
- **Variable** is a technical name where we store the value.

For now, focus on the equal sign, quotes, periods, and mathematical symbols because those are the skeleton in the core of the javaScript language itself.

It's the aspect that never changes regardless of environment.


## Day 2: Functions

### What is a function?

- **Function** is an action words, in English a function would be a verb.
- To call a function you simple type the name of the action/function including a bit of data inside the pair of parentheses.
- **Argument** is a technical name for a piece of data that we pass along.
- To create a function, we can start with function word then a space and then our own function name with a parentheses after that we include a pair of curly brackets.
- **Parameter** is a variable name inside the function definition.


## Day 3: Objects

### Why we would use objects?

- We would use objects to write a code to see that there is a relationship between the variables/functions.

### What is an object?

- **Object** is a container so we can store whatever we want inside it. It contains properties and methods.
- **Property** is a variable inside the object.
- To add another property we need to separate them with a comma (`,`).
- To access the property value of an object, we call the object name then dot (`.`) then the name of the property.
- **Method** is the technical name we use for a function inside an object.
- Browsers `document` object is one of the most useful objects.
- `document` object represents the webpage as a whole meaning it contains all sorts of properties and methods.
- `document` object has a method named `addEventListener` that accepts two (2) arguments, an event keyword and a function that we want to run everytime this event happens.

**Note**: Don't include a pair of parentheses right after the function name inside the `addEventListener` so we won't run, call or execute the function right away. Instead we are just passing along the name/reference to the function and it's up to the web browsers `addEventListener` method to know when to call this function.


## Day 4: Arrays

### What is an array?

- **Array** is a collection made up of multiple items.
- A pair of square brackets (`[]`) is how you create an array, inside the brackets we can include multiple values.
- An **array** is actually just a special type of object that has access to its own abilities or methods.
- **Arrays** in JavaScript are zero based, we start counting at zero (0) instead of one (1).
- `push` is a one of the method to add an item at the end of an array.
- `console.log` and anything we include inside parentheses will get output or logged to the console of the browser.
- `toUpperCase` method to capitalized all the letters.
- `toFixed` method is to round the numbers to the nearest whole number.
- Different types of data have access to different abilities or methods.
- `splice` method lets us remove a particular item from an array, accepts two (2) arguments, first the index of the item you want to remove, then how many items you want to remove starting from that index.

### Why arrays are so important?

- In addition to adding and removing items from an array, it's also very easy to sort an array alphabetically, quality or the most important of all.


## Day 5: Making Decisions

Computer programming uses `if` statements or similar conditional logic everywhere.

- `else` statements are optional it's just a fall back, if the first condition is not true then the `else` will happen.
- the area inside the parentheses is called a condition, which result to a value of either `true` or `false`.
- greater than (`>`), less than (`<`), less than or equal to (`<=`), greater than or equal to (`>=`), equal to `==`, not equal to (`!=`)
- Any number larger than zero, `true`, string with any content will be interpreted as `true`.
- `while` loop will repeat itself as long as the conditional value is true.


## Day 6: Higher-Order Functions

### What is a higher order function?

A higher-order functions is a function that either:

- Accepts a function as an argument
- Return a function

Learn about the useful higher-order functions that are part of the language itself (and not just web browser jargon).

- `addEventListener` method is a higher-order function because the second argument it expects to receive is a function.
- some programming languages are _not_ allowed to pass a function as an argument
- `forEach` method that accepts a function as an argument, and will run that function once for each item in the collection.

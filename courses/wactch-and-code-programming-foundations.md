# Programming Foundations

This introductory course is just the first step for Watch and Code students and is meant to serve as the foundation for more advanced study later on in the Premium Membership

Course Created by Gordon Zhu

- Approach
  - **Mechanics**: computer's perspective, syntax, core constructs
  - **Admissions**: written answers and technical exam
  - **Methodology**: break large programs into manageable pieces,considering tradeoffs, enforcing correctness
  - **Discreet math**: logic, sets, probability, graph theory, proofs
  - **Algorithms and data structures**: interventing solutions via observation / discovery cycle
  - **Web applications**: servers, data modeling, operations, how to be effective on your own
  - **Open source**: how to be effective on high performing team
  - **Career coaching**: applications, preparing for interviews, negotiating offers
  - **Weekend computer club**: seminar-style discussions about foundational topics in computer science
- System
  - 3 components:
    - Recurring meetings
    - Public work log
    - Assessments
  - 5 benefits:
    - focused consistency and structure
    - feedback and guidance
    - community
    - problem "consulting"
    - quality control, clear standards
- Follow one rule: code daily
  - Goal: not to be a hero of some time, but to be a hero over the span of an entire career
- a good language for learning
  - **easy to read**: Python
  - **compact syntax**: Lisp
  - **easy to set up**: JavaScript
  - **clearly useful**: JavaScript
- focus on the essential concepts first, then its optional features
- Get ready
  - **Browser**: Chrome, Firefox, Opera, Edge
  - **Editor**: Visual Studio Code, Sublime Text, Notepad++
  - **settings.json**: 2 spaces `tabSize` for JS convention, `fontSize` according to your preference
- todo lists shares the same features almost identicals with other web apps
  - add todos before anything else
  - toggle a single item
  - toggle everything at once
  - edit a todo
  - delete a todo
- todo version 1
  - create a list using array, e.g., `['Item 1', 'Item2', 'Item3']`
  - save the list to a variable to access it later on, e.g., `var todos = ['Item 1', 'Item2', 'Item3']`
  - display todos using `console.log(todos)`
  - add a todo using `push()` method, e.g., `todos.push('Item Name')`
  - edit todo by referencing todos with index, e.g., `todos[0] = 'Item Name'`
  - delete todo using `splice()` method which asks for starting index position and number of items to delete
- functions characteristics
  1. group multiple lines of code under a single name
     - execute the name of the function with a set of parenthesis
  2. provide data when function runs
- function variable is _parameter_
- function value is _argument_
- built-in functions (methods), e.g., `log`, `push`, `splice`
- computer's perspective
  - breakpoints in debugger can be used to pause the specific line of codes
  - step over to next line of code that's about to run
  - `resume script`
    - will go to the next breakpoint
    - exit debugger if no breakpoints left
  - check your expectations on your codes and compare to the reality
  - `step into` will go to the function body
    - can only step into the functions that are not built-in
  - setting breakpoints without writing to a file using `debugger` statement
- high quality questions:
  - saves time
  - avoid frustration and conflict
  - can be discussed, analyzed, critiqued in an objective way
  - more effective which get answers more quickly and more often
- asking steps:
  1. Understand the code
     - go through every line using debugger
     - apply expectations vs. reality framework
  2. Clearly describe the problem
     - provide the steps to reproduce the problem
  3. Include code so that it can be tested by others
  4. Format code consistently and check for typos
     - go through your code character by character
  5. Describe what you've done so far to troubleshoot the problem
- functions and variables
  - observations
    - inside a function, outside data are accessible
    - but outside function, function's data are inaccessible
  - circles and arrows
    - circle a function declarations
    - arrow for reference call
- Boolean represents `true` or `false`
- String represents text
- objects
  - `property` on the left side
  - `value` on the right side
  - access objects using dot notation
  - access array using index
  - **method** is a function inside objects
- comparison are two things equal to each other
- if statement
  - `if` condition is `true`, code will run
  - `else` will only run if condition is `false`
- **JS Data types**:
  - **Primitives** (values) can be compared to each other
    - String: `'This is a string'`
    - Number: 1, 2, 3, 4, ...
    - Boolean: `true`, `false`
    - `undefined`: value that hasn't been set
    - `null`: nothing
  - **Objects** (references) cannot be compared to each other
    - `{}`, `[]` arrays, functions, etc.
    - objects are stored in different memory
    - references meaning memory addresses
      - not looking the values but saving the memory address (reference)
- loop concepts
  - **initialization**: using variable
  - **condition**: to check or verify
  - **final expression**: if condition is true, increment or decrement
- array has property of `length`
- `document` object represents the entire page
- `return` keyword inserts a value where the function was called
  - if `return` keyword is not used, it will return `undefined`
- DOM methods and properties
  - `getElementById()` method grabs an html element with the specific id
  - `addEventListener()` method accepts an event type and listener function
  - `createElement` method creates an html element in JavaScript
  - `appendChild()` method inserts child element into parent element
  - `innerHTML` property lets us get and set a html
  - `innerText` property lets us get and set a text
  - `currentTarget` property always refers to the element which event handler has been attached
  - `target` property identifies the element on which the event occur and which may be its descendant
- JavaScript String methods
  - `charAt()` method gives us character at a specified index
  - `indexOf()` method gives us the index of specified character
  - `slice()` method gets characters after a specific index
  - `split()` method splits on a character and returns an array
  - `substr()` method returns the characters in a string
- `prompt()` method displays a dialog with an optional message prompting the user to input some text
- operators
  - **comparison operators**:
    - Equal (`==`)
    - Not equal (`!=`)
    - Strict equal (`===`)
    - Strict not equal (`!==`)
    - Greater than (`>`)
    - Greater than or equal (`>=`)
    - Less than (`<`)
    - Less than or equal (`<=`)
  - **logical operators**:
    - AND (`&&`)
    - OR (`||`)
    - NOT (`!`)


## Quiz

1. Murakami was describing:
   - [ ] Person A
   - [ ] Person B
   - [x] Person C

---

2. We're going to put our JavaScript between what tags?
   - [ ] html
   - [ ] head
   - [ ] body
   - [x] script

---

3. To open a truly blank tab:
   - [ ] Use the "new tab" feature in Chrome
   - [x] On any tab, navigate to "`about:blank`"

---

```js
var array1 = ['yo', 'hi'];
array1[0] = array1[1];

var array2 = ['bye', 'later'];
array2.splice(1, 1);

var array3 = [];
array3[0] = array1[0];
array3[1] = array2[0];
```

4. After this code runs, `array3` will be equal to:
   - [ ] `['yo', 'hi']`
   - [ ] `['yo', 'yo']`
   - [ ] `['hi', 'hi']`
   - [ ] `['bye', 'bye']`
   - [x] `['hi', 'bye']`
   - [ ] `['bye', 'hi']`
   - [ ] None of the above

---

```js
var todos = ['Item 1', 'Item 2', 'Item 3'];

console.log(todos);

todos.push('Item 4');

todos[0] = 'Item 1 updated';

todos.splice(0, 1);
```

5. Which of the following statements are true about the code above? (choose at least one)
   - [ ] Every `]` is followed immediately by a semicolon.
   - [x] Every `)` is followed immediately by a semicolon.
   - [ ] Every `'` is followed immediately by a semicolon.
   - [x] Every line of code ends with a semicolon.
   - [ ] None of the above.

---

```js
function exampleFunction(a, b) {
  console.log(a);
  console.log(b);
}
```

Call `exampleFunction` four times:
- With no arguments.
- With 1 argument.
- With 2 arguments.
- With 3 arguments.


6. Based on these four function calls, which of the following statements are true? (select 1 or more)
   - [x] If `exampleFunction` is called with 0 arguments, `a` and `b` will be `undefined`.
   - [ ] If `exampleFunction` is called with 1 argument, `a` will be `undefined`.
   - [x] If `exampleFunction` is called with 1 argument, `b` will be `undefined`.
   - [ ] If `exampleFunction` is called with 3 arguments, the first argument will be ignored.
   - [x] If `exampleFunction` is called with 3 arguments, the third argument will be ignored.

---

```js
var todos = ['Item 1', 'Item 2', 'Item 3'];

console.log(todos);

function add(todo) {
  todos.push(todo);
  console.log(todos);
}

function edit(position, newValue) {
  todos[position] = newValue;
  console.log(todos);
}

function remove(position) {
  todos.splice(position, 1);
  console.log(todos);
}
```

7. Which of the following statements are true about the code above? (choose at least one)

   - [ ] Every `)` is followed immediately by a `;`.
   - [ ] Every line of code ends with a `;`.
   - [x] Every `{` is not followed by a `;`.
   - [x] Every `}` is not followed by a `;`.
   - [x] Every line of code ends with a `;`, except for lines that end in `{` or `}`.
   - [ ] None of the above.

---

![Refresh and resume](https://cdn.fs.teachablecdn.com/resize=width:1500/8rF5mz6oQsGhNA2GUTXA)

8. Here's a screenshot of my computer. After hitting refresh and clicking "Resume script execution", which of the following statements will be true?
   - [ ] The program will be paused at line `10`
   - [ ] The program will be paused at line `15`
   - [ ] The program will be paused at line `20`
   - [ ] The program will be paused at line `25`
   - [x] None of the above

---

![Pause on a specific line](https://cdn.fs.teachablecdn.com/resize=width:1500/V18lo1LGQqqyKUQ5Qdjw)

9. I want to pause the debugger at line 20. Which of the following series of actions will accomplish this?
   - [ ] Refresh the page
   - [ ] Refresh the page, run `edit`
   - [ ] Run `edit`
   - [ ] Refresh the page, run `edit`, add a breakpoint at line `20`
   - [ ] Add a breakpoint at line `20`, refresh the page
   - [x] Refresh the page, run `edit`, add a breakpoint at line `20`, run `edit`
   - [ ] None of the above

---

![Step-over and step-into](https://cdn.fs.teachablecdn.com/resize=width:1500/8DQSr78bSO6XZv9VFHoA)

10. My screen currently looks like this. What will happen after I hit "Step-over" and then "Step-into"?
    - [ ] The debugger will be paused at line `15`
    - [ ] The debugger will be paused at line `16`
    - [x] The debugger will be paused at line `17`
    - [ ] None of the above

---

```js
var outside = 'outside';

function a() {
  var aVar = 'a';
  
  function aInner1() {
    var aInner1Var = 'aInner1Var';
    
    function aInner1Inner() {
      var aInner1InnerVar = 'aInner1InnerVar'; 
    }
  }
  
  function aInner2(aInner2Param) {
    var aInner2Var = aInner2Param;
  }
}

function b(bParam) {
  console.log(bParam);
}
```

11. Which of the following statements are true? Select 1 or more.
    - [x] `a` is visible to `b`
    - [ ] `b` and `bParam` are visible to `a`
    - [ ] `aInner1InnerVar` is only visible to `aInner1Inner` and `aInner1`
    - [x] `aInner1InnerVar` is visible to `aInner1Inner`
    - [x] `aVar` is visible to `aInner2`
    - [ ] `aInner1Var` is visible to `aInner2`
    - [ ] `aInner2Param` is visible to `aInner1`.
    - [ ] None of the above.

---

```js
var myArray = [{name: 'Gordon'}];

function exampleFunction(thing) {
  thing.name = 'changed by exampleFunction';
  
  thing.thing = {name: 'new thing'};
}

exampleFunction(myArray[0]);
exampleFunction(myArray[0].thing);
```

12. After the code above runs, which of the following statements will be true? (select at least one)
    - [ ] At some point, `myArray` will have a length of 2.
    - [x] At some point, `myArray[0].thing.name` will be equal to `'new thing'`.
    - [x] After the code runs, `myArray[0].thing.thing.name` will be equal to `'new thing'`.
    - [ ] None of the above.

---

```js
var myBoolean = false;

if (myBoolean) {
  myBoolean = false;
}

if (myBoolean === false) {
  myBoolean = true;
}

if (myBoolean) {
  myBoolean = true;
} else {
  myBoolean = false;
}

if (myBoolean) {
  myBoolean = false;
}

if (myBoolean === false) {
  myBoolean = true;
}

if (myBoolean) {
  myBoolean = true;
} else {
  myBoolean = false;
}
```

13. In the above code, how many times will the value of `myBoolean` change from `true` to `false`?
    - [x] One time
    - [ ] Two times
    - [ ] Three times
    - [ ] Zero times

---

```js
function weirdToggleAll() {
  var completedTodos = 0;
  var allCompleted = true;

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed !== false) {
      completedTodos++;
    }

    if (completedTodos !== i + 1) {
      allCompleted = false;
    }
  }

  if (allCompleted === true) {
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed = false;
    }
  } else {
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed = true;  
    }
  }

  displayTodos();
}
```

14. In this section, we wrote a `toggleAll` function. If we replaced `toggleAll` with `weirdToggleAll`, would our app still work the same as before?
    - [x] Yes
    - [ ] No

---

```js
function function1(inputFunction, inputString) {  
  return inputFunction(inputString);
}

function function2(thing) {
  return thing;
}

var experiment = function1(function2, 'yolo');
```

15. Which of the following statements are true?
    - [x] experiment will be equal to `'yolo'`
    - [x] When `function1` runs, `inputFunction` will be equal to `function2`
    - [x] When `function1` runs, `inputString` will be equal to `'yolo'`
    - [x] When `function2` runs, `thing` will be equal to `'yolo'`
    - [ ] `function2` will run twice
    - [x] `function2` will run once

---

```js
// Assume the body contains an input element
// with an id of 'input-1'.

var input1 = document.getElementById('input-1');
var input1Value = input1.value;
input1Value = 'changed';

var input2 = input1;
input2.value = 'input 2';

input1.value = '';
input2.value = '';
```

16. Which of the above statements will be true?
    - [ ] `input1.value` will be equal to `'changed'` and then will be changed to `''`.
    - [x] `input2.value` will be equal to `'input 2'` and then will be changed to `''`.
    - [ ] None of the above.

---

```js
function quiz(text) {
  var newText = '';
  
  for (var i = 0; i < text.length; i++) {
    if (text[i] === '-') {
      newText += '--';
    } else {
      newText += text[i];
    }
  }
  
  return ('--' + newText + '--').split('-');
}
```

17. If you run `quiz('careful-is-fast')`, which of the following statements will be true?
    - [ ] The function call will return an array that has length 3.
    - [ ] The function call will return an array that has length 6.
    - [x] The function call will return an array that has length 9.
    - [ ] The function call will return an array that has length 12.
    - [ ] At the end of the loop where `i = 7`, `newText` will have length 7.
    - [ ] At the end of the loop where `i = 7`, `newText` will have length 8.
    - [x] At the end of the loop where `i = 7`, `newText` will have length 9.
    - [ ] At the end of the loop where `i = 7`, `newText` will have length 10.

---

```js
var myArray = [
  'First',
  'Second',
  'Third'
];

console.log(todos);

function sayHi() {
  console.log('Hi!');
}

var a = sayHi;
var b = function sayBye() {
  console.log('bye');
};
```

18. Which of the following statements are true about the code above? (choose at least one)
    - [x] An assignment is always followed by a `;`.
    - [x] A `{` is never followed by a `;`.
    - [ ] Every `}` is not followed by a `;`.
    - [x] Every `}` that marks the end of a block is not followed by a `;`, unless the `}` marks the end of an assignment.
    - [ ] None of the above.

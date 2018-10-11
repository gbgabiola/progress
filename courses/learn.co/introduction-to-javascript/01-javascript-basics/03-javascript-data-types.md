# JavaScript Data Types

In this lesson, we'll cover some of the most commonly used data types in JavaScript.

## Objectives

1. Define "data type"
2. Explain JavaScript's data types
3. Use the `typeof` operator to explore JavaScript's data types

## What is a data type?

At the machine level, all data on a computer is bits — 1s and 0s. Humans, it turns out, prefer not to work so close to the metal, so we have data types for describing different bits of information. Data types classify our data both for ourselves and the computer so that we can develop some expectations as to how the data can and will be used.

## Math!

Imagine you're building a new-fangled version of those toys where you have to match the shape with the hole it fits into.

This new-fangled version works when you combine inputs of the same type. To demonstrate, let's do some math. Open up your Chrome console (View/Developer/JavaScript Console) and enter:

```js
2 + 2;
```

We should, unsurprisingly, see `4` show up in console. Cool — pop that into the `4` hole in our shape sorter. Now let's try

```js
2 + "2";
```

(Don't forget the quotation marks around the second number!)

And press enter.

Um. Something's broken? Instead of another `4`, we got `"22"` — that won't work.

It turns out, we're adding (with the `+` operator) things of two different types. `2` is a number; `"2"` is a string. So when we add them together, JavaScript recognizes that we can't do simple arithmetic — instead, it tries to make the two things compatible. In this case, it turns the first `2` into `"2"` and then concatenates (pushes together) the two things — so we get `"22"`.

One last example — before you press "enter" for this one, we want to think about what's going to happen. What will the result be?

```js
"2" + 2;
```

Have you thought about it? What did we learn above? Are you ready? Okay, press "enter".

That's right, the result of `"2" + 2` is also `"22"`.

Why all this mumbo jumbo with types? Well, let's think about it. As humans when we see `2345`, we provide context: we might think of this sequence of integers in our heads as "two thousand three hundred forty-five"; we might note immediately that the integers are consecutive. We understand that `2345 + 2` should give us `2347`.

JavaScript can't do that. It sees `2345` and only knows that it's a number. Similarly, it sees _anything_ in quotation marks as a string. We provide the context for JavaScript according to the rules that JavaScript follows — one of those rules happens to describe what happens when we add a number and a string.

## You're just not my type

How do we know what types we're dealing with? JavaScript gives us the handy dandy `typeof`. We use it like so

```js
typeof 2; // "number"
typeof "2"; // "string"
typeof "2"; // "string" — strings can be enclosed in single (') or double (") quotes
```

Pretty simple, right? You can think of `typeof` as a shortcut for telling you what kind of hole to look for in our imaginary, new-fangled shape-sorter.

In addition to numbers and strings, JavaScript has the following primitive types:

- Boolean
- Undefined
- Null

Enter the following commands in your console to get a feel for the different types:

```js
typeof 1;
typeof 10;
typeof 1.123;
```

```js
typeof "Albert";
typeof "123";
typeof "What's my type?";
```

```js
typeof true;
typeof false;
```

```js
typeof undefined;
```

```js
typeof null;
```

Also enter the following — pay attention to the errors!

```js
typeof 1.123.45
```

```js
typeof 'I'm not going to work'
```

For now, we're going to explore numbers and strings the most. Later in the curriculum, you'll learn a lot more about the `boolean`, `null` and `undefined` data types.

### Numbers

JavaScript uses numbers just like you would think of them, and we can even use decimal points. Enter the following in console:

```js
4;
8.0;
16.123;
```

In fact, JavaScript treats all numbers as if they have decimal points (even if they don't). Sometimes this can lead to unexpected consequences. Enter the following in console:

```js
4;
```

If you press enter, you'll see `4`. Simple enough. Now enter the following:

```js
4.0000000000000001;
```

If you press `enter`, you'll see... `4`. Hrm. It's not important to know the details of how this behavior works right now (although we encourage you to search for resources online if you find it interesting!), but it is important to know that it happens.

### Strings

Strings are very straightforward in JavaScript. They are collections of characters. Plus signs are used to concatenate strings.

In their most basic form, strings look like

```js
"I'm a string";
'I\'m also a string';
```

Notice that we added a `\` before the ` in the second string above. Because we use quotation marks to tell JavaScript, "Hey, this is a string!", we have to escape quotation marks when they're inside of a string so that JavaScript knows to treat them as part of the string.

Go ahead and enter `'I\'m a string'` in console. You should see `"I'm a string"` — when we wrap a string in double quotation marks, we don't need to escape single quotation marks (the apostrophe, in this example) that appear inside.

```js
"I'm a string";
```

Similarly, we don't need to escape double quotes when we use them in a singly-quoted string:

```js
'I said, "Strings are pretty nifty."';
```

We can "add" strings together — this is called concatenation:

```js
"Hello, " + "World"; // Returns 'Hello, World'

"High " + 5 + "!!!"; // Returns 'High 5!!!'
```

We can also insert strings into other strings — this is called interpolation. JavaScript supports string interpolation with [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

Template literals look and behave like strings, except instead of being wrapped in a single or double quote, they're wrapped in backticks (at the top left of your keyboard, under the escape key — it looks like `).

```js
`High ${3 + 2}!`; // 'High 5!'
```

We'll cover string interpolation in greater depth later on, but for now notice that the whole string is wrapped in backticks, and the part that we interpolate is wrapped in `${}`. This, `${}`, is simply a special signal to JavaScript that people weren't likely to write out on their own — it signals to the JavaScript interpreter that it should evaluate (that is, run the code) whatever is inside of it. Being able to evaluate our code and put the result directly inside of a string is a super powerful idea that we'll make lots of use of.

## Resources

- [MDN - JavaScript Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

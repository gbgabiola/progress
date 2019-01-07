# [Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about `reduce`, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that `map` and `filter` are special cases of `reduce`.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site.

---

Fill in the `urlSlug` function so it converts a string `title` and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use `replace`. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (`-`)

The output should be all lower-cased letters

The output should not have any spaces

## Setup
```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```

## Solution 1
```js
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.split(/\W/).filter((obj) => {
    return obj !== '';
  }).join('-').toLowerCase();
  
}

var winterComing = urlSlug(globalTitle); // "winter-is-coming"
```

## Solution 2
```js
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
}

var winterComing = urlSlug(globalTitle); // "winter-is-coming"
```
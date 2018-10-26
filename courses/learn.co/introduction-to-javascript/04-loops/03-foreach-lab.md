# forEach() Lab

## Objectives

1. Practice using `forEach`
2. Practice passing functions as callbacks

## Instructions

You'll be editing `index.js` and running tests as usual.

- Define a function, `iterativeLog()`, that accepts an array. Call `.forEach()` on this array, and inside the callback, log each element with the format `${index}: ${element}`.
- Define a function, `iterate`, that accepts a callback. Within the `iterate()` function, you should initialize an array. It can contain anything you want, but make sure that it is not empty! Call `.forEach()` on this array, passing the callback to `.forEach()`. Then return the array that you initialized.
- Define a function, `doToArray` that accepts an array and a callback. Call `.forEach()` on the array, passing the callback as the `forEach` callback.

Remember, you can run the tests using `mocha.run()` in the browser if you'd like — then read the results, refresh the page, and keep going afterwards.

>Note: If you're using the Learn IDE, this is how to use mocha.run():
1.	Type "httpserver" into your learn IDE console.  
2.	Type the ip it gives you into your browser.  (The ip will look something like this: 158.38.11.256:30615)
3.	Go to your browser's console and type mocha.run() and press <ENTER>.
4.	Any errors from your code will now appear in your browser on the tab in which you typed your ip in step 2.
5.	Debug, editing your work in index.js, saving it, and repeating steps 3-5 until all tests pass.

## Resources

- [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

---

## Solution

```js
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const gospel = ["Matthew", "Mark", "Luke", "John"];

  gospel.forEach(callback);
  return gospel;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
```
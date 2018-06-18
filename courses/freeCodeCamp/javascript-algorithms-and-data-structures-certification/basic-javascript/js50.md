# [Basic JavaScript: Global vs. Local Scope in Functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)

It is possible to have both _local_ and _global_ variables with the same name. When you do this, the `local` variable takes precedence over the `global` variable.

In this example:

```js
var someVar = "Hat";
function myFun() {
var someVar = "Head";
return someVar;
}
```

The function `myFun` will return `"Head"` because the `local` version of the variable is present.

---

Add a local variable to `myOutfit` function to override the value of `outerWear` with `"sweater"`.

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  
  return outerWear;
}

myOutfit();
```
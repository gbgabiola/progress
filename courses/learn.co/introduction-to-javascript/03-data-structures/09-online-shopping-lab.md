# Online Shopping

## Objectives
- Model a shopping cart full of items as an array of objects in JavaScript.
- Iterate over arrays with `for` loops
- Use ES6 `${template literals}` instead of `"regular, " + "old " + string + " concatenation."`
- Brush up on conditionals and control flow to make some Oxford comma magic happen.

## Instructions
We've started you off with a `cart` variable that points at an empty array. There are five functions that you'll have to code in order to create a working shopping cart:
1. The `addToCart()` function accepts one argument, the name of an item.
    - Use that passed-in string to create a new object representing the item. The object should consist of two key-value pairs : `{ itemName: name of the item, itemPrice: price of the item, }`. As more items are added, the `cart` should start to look something like this: `[ {  itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]`.
    - The price of each item should be a randomly-generated integer between 1 and 100.
      - **_HINT_**: Look into `Math.random()` and `Math.floor()`.
    - Upon the successful addition of a new item to the cart, the function should return `<itemName> has been added to your cart.` .
2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, returning the contents as one long, coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    - If the cart is empty, the function should instead return `Your shopping cart is empty.`
    - ***Note***: Pay close attention to the syntax above. The returned statement should be a single sentence that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes according to how many items the cart contains:
      - 1 item — `In your cart, you have bananas at $17.`
      - 2 items — `In your cart, you have bananas at $17, and pancake batter at $5.`
      - 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
3. The `total()` function accepts no arguments, iterates through the `cart` array, and returns the current total value of the items in the cart.
4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
    - If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
    - **_HINT_**: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to be useful.
    - If the cart does not contain a matching item, the function should return `That item is not in your cart.`
5. The `placeOrder()` function accepts one argument, a credit card number.
    - If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
    - If a card number is received, the function should
      - empty the `cart` array
      - return `Your total cost is $71, which will be charged to the card 83296759.` (where `71` is the value returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`)

## The final send-off
This lab is _not_ easy! The methods, especially `viewCart()` require careful planning and a sharp eye. The `cart` array is a non-trivial nested data structure, and it would be a good idea to periodically check the value of your variables (think: `console.log()`, `debugger`, etc.) at different points within your functions, _especially_ when attempting to iterate over the `cart` and its items.

---

## Solution

```js
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = generateCartItem(item);
  getCart().push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription();
}

function total() {
  var sum = sumUpPrices();
  return sum;
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName);
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove();
}

function placeOrder(cardNumber) {
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var sumToCharge = total();
    setCart([]);
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`;
  }
}

// helper functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function generateCartDescription() {
  var cartDescription = 'In your cart, you have ';
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = '';
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`;
  }
  return `${cartDescription}.`;
}

function searchCartForItemToRemove(itemName) {
  var searchResult;
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult;
}

function sumUpPrices() {
  var sum = 0;
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice;
  }
  return sum;
}

function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.';
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove);
  //Array.prototype.splice()
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  getCart().splice(indexOfItemToRemove,1);
}
```
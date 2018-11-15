# [Counting Cards](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/counting-cards)

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called [Card Counting](https://en.wikipedia.org/wiki/Card_counting).

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

| Count Change | Cards                  |
| ------------ | ---------------------- |
| +1           | 2, 3, 4, 5, 6          |
|  0           | 7, 8, 9                |
| -1           | 10, 'J', 'Q', 'K', 'A' |

You will write a card counting function. It will receive a `card` parameter, which can be a number or a string, and increment or decrement the global `count` variable according to the card's value (see table). The function will then return a string with the current count and the string `Bet` if the count is positive, or `Hold` if the count is zero or negative. The current count and the player's decision ( `Bet` or `Hold` ) should be separated by a single space.

**Example Output**  
`-3 Hold`  
`5 Bet`

**Hint**  
Do NOT reset `count` to 0 when value is 7, 8, or 9.  
Do NOT return an array.  
Do NOT include quotes (single or double) in the output.

## Setup

```js
var count = 0;
function cc(card) {
  // Only change code below this line
  return "Change Me";
  // Only change code above this line
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
```

## Solution

Using `if` / `else if`:
```js
if (card >= 2 && card <= 6) count++;
if (card === 10 || (card >= 'A' && card <= 'Q')) count--;
return (count > 0) ? count + " Bet" : count + " Hold";
  
cc(2); cc(3); cc(7); cc('K'); cc('A');
```

Using `switch`:
```js
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
    break;
}
return (count > 0) ? count + " Bet" : count + " Hold";
cc(2); cc(3); cc(7); cc('K'); cc('A');
```
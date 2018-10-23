# [Use the flex-basis Property to Set the Initial Size of an Item](https://learn.freecodecamp.org/responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item)

The `flex-basis` property specifies the initial size of the item before CSS makes adjustments with `flex-shrink` or `flex-grow`.

The units used by the `flex-basis` property are the same as other size properties (`px`, `em`, `%`, etc.). The value `auto` sizes items based on the content.

---

Set the initial size of the boxes using `flex-basis`. Add the CSS property `flex-basis` to both `#box-1` and `#box-2`. Give `#box-1` a value of `10em` and `#box-2` a value of `20em`.

## Solution

```css
#box-1 {
  background-color: dodgerblue;
  height: 200px;
  flex-basis: 10em;
}

#box-2 {
  background-color: orangered;
  height: 200px;
  flex-basis: 20em;
}
```
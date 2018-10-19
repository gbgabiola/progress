# [Use tabindex to Specify the Order of Keyboard Focus for Several Elements](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements)

The `tabindex` attribute also specifies the exact tab order of elements. This is achieved when the value of the attribute is set to a positive number of 1 or higher.

Setting a tabindex="1" will bring keyboard focus to that element first. Then it cycles through the sequence of specified `tabindex` values (2, 3, etc.), before moving to default and `tabindex="0"` items.

It's important to note that when the tab order is set this way, it overrides the default order (which uses the HTML source). This may confuse users who are expecting to start navigation from the top of the page. This technique may be necessary in some circumstances, but in terms of accessibility, take care before applying it.

Here's an example:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

---

Camper Cat has a search field on his Inspirational Quotes page that he plans to position in the upper right corner with CSS. He wants the search `input` and submit `input` form controls to be the first two items in the tab order. Add a `tabindex` attribute set to "1" to the search `input`, and a `tabindex` attribute set to "2" to the submit `input`.

## Solution

```html
<input type="search" name="search" id="search" tabindex="1">
<input type="submit" name="submit" value="Submit" id="submit" tabindex="2">
```
# [Use Attribute Selectors to Style Elements](https://learn.freecodecamp.org/responsive-web-design/basic-css/use-attribute-selectors-to-style-elements)

You have been giving `id` or `class` attributes to elements that you wish to specifically style. These are known as ID and class selectors. There are other CSS Selectors you can use to select custom groups of elements to style.

Let's bring out CatPhotoApp again to practice using CSS Selectors.

For this challenge, you will use the `[attr=value]` attribute selector to style the checkboxes in CatPhotoApp. This selector matches and styles elements with a specific attribute value. For example, the below code changes the margins of all elements with the attribute `type` and a corresponding value of `radio`:

```css
[type="radio"] {
  margin: 20px 0px 20px 0px;
}
```

Using the `type` attribute selector, try to give the checkboxes in CatPhotoApp a top margin of 10px and a bottom margin of 15px.

## Solution

```css
[type="checkbox"] {
  margin-top: 10px;
  margin-bottom: 15px;
}
```
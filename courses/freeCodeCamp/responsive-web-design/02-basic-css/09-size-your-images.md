# [Size Your Images](https://learn.freecodecamp.org/responsive-web-design/basic-css/size-your-images/)

CSS has a property called width that controls an element's `width`. Just like with fonts, we'll use `px` (pixels) to specify the image's width.

For example, if we wanted to create a CSS class called `larger-image` that gave HTML elements a width of 500 pixels, we'd use:

```html
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

---

Create a class called `smaller-image` and use it to resize the image so that it's only 100 pixels wide.

**Note**
Due to browser implementation differences, you may need to be at 100% zoom to pass the tests on this challenge.

## Solution

```css
.smaller-image {
  width: 100px;
}
```